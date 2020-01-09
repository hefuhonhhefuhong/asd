/**
 * 1.小鸟默认下降
 * 2.当点击 wrap 时， 小鸟需要上升
 * 3.上升一段距离之后继续下降
 * 4.小鸟掉落到草地上时，触地死亡
 * 5.创建管道，管道移动，
 *   管道高度随机， 中间间隙不变
 * 6.碰撞检测
 *   如果小鸟通过管道，加分
 *   撞上， 游戏结束（停止页面所有动作）
 */
// 获取元素
var bird = document.querySelector('.bird');
var wrap = document.querySelector('.wrap');
var scoreWrap = document.querySelector('.score-wrap');
var pipeWrap = document.querySelector('.pipe-wrap');
var startPage = document.querySelector('.start-page');
var overPage = document.querySelector('.over-page');
// 声明全局变量
var birdDownTimer, birdUpTimer; // 小鸟下降, 上升计时器
var pipeArr = [];  // 盛放所有管道
var createPipeTimer; // 创建管道的计时器
var pipeMoveTimer; // 控制所有管道移动的计时器  
var score = 0;  // 分数  

// 随机数函数
function rn(x, y){
    return Math.round(Math.random() * (y - x) + x);
}



// 小鸟下降
function birdDown() {
    birdDownTimer = setInterval(function() {
        // 获取小鸟当前的 top 值，累加
        var t = bird.offsetTop + 1;
        bird.style.top = t + 'px';
        // 当小鸟掉落在草地上时，停止掉落，触底死亡（结束游戏）
        if(t == 397) {
            clearInterval(birdDownTimer);
            // 调用游戏结束函数

        }
    }, 9);
}


// 小鸟上升 每隔一段时间top-1，减够30px，再掉落
function birdUp() {
    // 获取小鸟当前的top值，计算出此次点击的目标top，用来做上升结束的条件判断
    var pointTop = bird.offsetTop - 30;
    // 小鸟不能再降落
    clearInterval(birdDownTimer);
    clearInterval(birdUpTimer); 
    birdUpTimer = setInterval(function() {
        var t = bird.offsetTop - 1;
        bird.style.top = t + 'px'; // 要匀速上升
        if(t == pointTop || t <= 0) {
            // 到达此次点击的目标top
            clearInterval(birdUpTimer);
            // 继续下降
            birdDown();
        }
    }, 9);
}


// 创建一个管道
function createOnePipe() {
    // 创建一个 pipe
    var el = document.createElement('div');
    el.className = 'pipe';
    // 添加其 up 和 low ,随机高度，分别设置给 up 和 low
    // 规定管道之间的距离为 120
    var uh = rn(60, 243);
    var lh = 303 - uh;
    el.innerHTML = `
        <div class="up" style="height: ` + uh + `px;">
            <div class="up-head"></div>
        </div>
        <div class="low" style="height: ` + lh + `px;">
            <div class="low-head"></div>
        </div>
    `;
    // 将 el 添加到pipeWrap 和 pipeArr中
    pipeWrap.appendChild(el);
    console.log(el);
    pipeArr.push(el);
}
// // 分数转化图片
// function showScore() {
//     // score: 458 --> '458'
//     scoreWrap.innerHTML = '';  // 清除原有的数据
//     var str = score + ''; // String(score); score.toString();
//     for(var i = 0; i < str.length; i++) {
//         var el = '<img src="img/'+ str[i] +'.jpg">';
//         scoreWrap.innerHTML += el;
//     }
// }

// 碰撞检测
// function hit(el) {
//     var lc = bird.offsetLeft + bird.offsetWidth >= el.parentNode.offsetLeft;
//     var tc = bird.offsetTop + bird.offsetHeight >= el.offsetTop;
//     var rc = bird.offsetLeft <= el.parentNode.offsetLeft + el.offsetWidth;
//     var bc = bird.offsetTop <= el.offsetTop + el.offsetHeight;
//     if(lc && tc && rc && bc) {
//         return true;
//     }
// }

// 创建多个管道
createPipeTimer = setInterval(createOnePipe, 2500);

// 管道移动
pipeMoveTimer = setInterval(function() {
    // 循环管道列表
    for(var i = 0; i < pipeArr.length; i++) {
        // 让每个管道在当前的 left 基础上累减
        var el = pipeArr[i];
        var l = el.offsetLeft - 1; // 新的left
        el.style.left = l + 'px';
        // 如果管道完全移动到小鸟左侧，代表没有碰上，需要加分
        if(l == -23) {
            score++; 
            // 将分数渲染成图片
            showScore();
        }
        // 当管道完全移出页面时，将其从页面和数组中清除
        if(l == -62) {
            el.remove();
            // 先移出的是先创建的
            pipeArr.shift();
            // 防止漏判
            i--;
        }
        // 和小鸟做碰撞检测，碰上游戏结束，通过加分
        var ur = hit(el.children[0]);  // 上
        var dr = hit(el.children[1]);  // 下
        if(ur || dr) {
            // 调用游戏结束函数
            // console.log('结束');
        }
    }
    
}, 10);

wrap.onclick = birdUp;

// 取消多次点击选中页面内容的默认效果
document.onselectstart = function(ev) {
    var e = ev || event;
    e.preventDefault();
};