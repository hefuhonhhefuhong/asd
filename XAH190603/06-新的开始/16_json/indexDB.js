// 打开或创建数据库(如果已经存在就打开，否则就创建)
var dbName = 'project';
// success, error 可以不传
function openDB(version, success, error) {
  var req = indexedDB.open(dbName, version);
  req.onsuccess = function() {
    success && (typeof success == 'function') ? success() : '';
  };
  req.onerror = function() {
    console.error('数据库打开或创建失败，请重试');
    // 如果用户传递了回调函数，那就调用，否则不反馈
    error && (typeof error == 'function') ? error() : '';
  };
  return req;
}

/* 创建数据表，每创建一个数据表，数据库的版本都要 +1(初始版本是 1)
 * dbVersion: 数据库版本
 * tabName: 要创建的表格的名称
 * key: 主键, 如果需要自动生成，key 就传 ''，否则 key 就是主键名称
 * keyList: 数组，表格中的键的列表，示例数据:
 *          [{
 *             name: 'username', // 键的名称
 *             unique: true // 用户明是否唯一，如果唯一，为true
 *          },{
 *             name: 'email',
 *             unique: true
 *          },{
 *             name: 'tel',
 *             unique: false
 *          }]
 * success: 表格创建成功之后的回调，可以不传
 * error: 表格创建之后的回调，可以不传
 */
function createTable(dbVersion, tabName, key, keyList, success, error) {
  var req = openDB(dbVersion, success, error);

  req.onupgradeneeded = function(e) {
    var db = e.target.result;

    // 创建一张数据表
    var obj = key ? {key: key} : {autoIncrement: true};
    var store = db.createObjectStore(tabName, obj);
    keyList.forEach(function(item) {
      store.createIndex(item.name, item.name, {unique: item.unique});
    });
  };
}

// 获取objectStore 对象的公共函数
function getStore(e, tabName) {
  var db = e.target.result;
  var transaction = db.transaction([tabName], "readwrite");
  return transaction.objectStore(tabName);
}

/*
 * 向数据库中添加数据:
 * dbVersion: 数据库的版本号(最新)
 * tabName: 要添加数据的表格
 * data: 要添加的数据，是个对象，对象中是这个表格中的所有的键值对列表
 * success: 数据添加成功的回调
 * fail: 数据添加失败的回调
 * */
function add(dbVersion, tabName, data, success, fail) {
  var req = openDB(dbVersion);
  req.onsuccess = function(e) {
    var store = getStore(e, tabName);
    var request = store.add(data);
    request.onsuccess = function() {
      success && (typeof success == 'function') ? success() : '';
    };
    request.onerror = function() {
      fail && (typeof fail == 'function') ? fail() : '';
    };
  };
}

/* 根据主键获取数据：
 * dbVersion: 要操作的数据库的版本号(最新)
 * key: 要获取的数据的主键
 * */
function getData(dbVersion, tabName ,key, success, error) {
  var req = openDB(dbVersion);
  req.onsuccess = function(e) {
    var store = getStore(e, tabName);
    var request = store.get(key);
    request.onsuccess = function(e) {
      success && (typeof success == 'function') ? success(request.result) : '';
    };
    request.onerror = function(e) {
      error && (typeof error == 'function') ? error() : '';
    };
  };
}

/*
 * 获取某个数据表中的数据列表:
 * dbVersion: 数据库的最新版本号
 * tabName: 要获取数据的数据表名
 * */
function getList(dbVersion, tabName, success) {
  var req = openDB(dbVersion);
  req.onsuccess = function(e) {
    var db = e.target.result;
    var store = getStore(e, tabName);
    var arr = []; // 要承接所有的返回列表
    store.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
        arr.push(cursor.value); // 将当次拿到的值 push 到了arr 中
        cursor.continue(); // 循环
      } else {
        success && typeof success == 'function' ? success(arr) : '';
      }
    };
  };
}

/* 根据主键删除数据:
 * dbVersion: 数据库最新版本号
 * tabName: 要删除数据的数据表
 * key: 要删除的数据的主键
 * success: 删除成功的回调
 * error: 删除失败的回调
 * */
function deleteData(dbVersion, tabName, key, success, error) {
  var req = openDB(dbVersion);
  req.onsuccess = function(e) {
    var db = e.target.result;
    var request = db.transaction([tabName], "readwrite").objectStore(tabName).delete(key);
    request.onsuccess = function(e) {
      // 删除成功！
      success && (typeof success == 'function') ? success() : '';
    };
    request.onerror = function() {
      error && (typeof error == 'function') ? error() : '';
    };
  };
}
