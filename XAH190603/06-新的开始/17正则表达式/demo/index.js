// 首页JQ的代码
$(function(){
    // 获取本地的值
    var data = localStorage.getItem("goodsList");
    // 将字符串转化成数组
    data = JSON.parse(data);
    console.log(data); // 输出的是两个数组
    // 循环创建页面结构

    for(var i in data){
        // 创建元素
        $(".wrap").append($('<div class="box"><p>'+data[i].title+'<span>/专区</span></p><img src='+data[i].bigImg+'><div class="content"></div></div>'));

        for(var j in data[i].list){
            $(".content").eq(i).append($("<div></div>").append($("<img src="+data[i].list[j].imgUrl+">"),$("<p>"+data[i].list[j].name +"</p>"),$("<p>"+data[i].list[j].explain+"</p>"),$("<ul></ul>")))
        
        for(var k in data[i].list[j].labels ){
            $(".content").eq(i).children("div").eq(j).children("ul").append("<li>"+data[i].list[j].labels[k]+"</li>")
        }
        $(".content").eq(i).children("div").eq(j).append("<p>￥<span>"+data[i].list[j].price+"</span></p>")
      }  
    }
})





// // 首页的jQ代码
// $(function () {
//     // 获取本地的值
//     var data = localStorage.getItem("goodsList");
//     // 将字符串装换成数组
//     data = JSON.parse(data);
//     console.log(data);
//     // 循环创建页面结构
//     for (var i in data){
//         // 创建元素
//         var newBox = $("<div></div>");
//         //   类名
//         $(newBox).addClass("box");
//         //  主要的页面结构
//         $(newBox).html('<p>' + data[i].title + '<span>/专区</span></p><img src="' + data[i].bigImg + '" alt=""><div class="content"></div>')
//         //   将元素放入页面中
//         $(".wrap").append(newBox);
  
//         // 大图的下的小图
//        for(var j in data[i].list){
//            console.log(data[i].list);
//         //    创建下面的图片名字，简介，还有写下面的labels的
//            $(".content").eq(i).append($("<div></div>").append($("<img src="+data[i].list[j].imgUrl+">"),$("<p>"+data[i].list[j].name+"</p>"),$("<p>"+data[i].list[j].explain+"</p>"),$("<ul></ul>")))
//         //  创建ul下面的li 
//            for(var q in data[i].list[j].labels){
//                $(".content").eq(i).children("div").eq(j).children("ul").append("<li>"+data[i].list[j].labels[q]+"</li>")
//            }
//         //    显示钱数
//            $(".content").eq(i).children("div").eq(j).append("<p>￥<span>"+data[i].list[j].price+"</span></p>")
//        }
//    } 
// })
