// // 页面数据

// var obj = [{
//     // 标题
//     title: "新品/",
//     // 大图
//     bigImg: "img/big1.jpg",
//     // 列表
//     list: [{
//         id: 1,
//         imgUrl: "img/1.png",
//         name: "浅草",
//         explain: "中国绿茶与脆爽果实",
//         labels: ["新品", "人气"],
//         price: 298
//     }, {
//         id: 2,
//         imgUrl: "img/2.png",
//         name: "芒果慕斯",
//         explain: "优质芒果的三种姿态，与青柠酸乳酪夹心",
//         labels: ["童趣", "聚会", "新品"],
//         price: 298
//     }, {
//         id: 3,
//         imgUrl: "img/3.png",
//         name: "榴莲飘飘",
//         explain: "榴莲狂热者的不二之选",
//         labels: ["新品", "人气", "聚会"],
//         price: 298
//     }, {
//         id: 4,
//         imgUrl: "img/4.png",
//         name: "（新）栗蓉蛋糕",
//         explain: "记忆中的栗子蛋糕，几代人恰好的团聚",
//         labels: ["童趣", "聚会", "长辈"],
//         price: 298
//     }]
// }, {
//     // 标题
//     title: "人气",
//     // 大图
//     bigImg: "img/big2.jpg",
//     // 列表
//     list: [{
//         id: 5,
//         imgUrl: "img/5.png",
//         name: "百利甜情人",
//         explain: "爱尔兰百利甜酒，新西兰奶油",
//         labels: ["聚会", "情侣"],
//         price: 198
//     }, {
//         id: 6,
//         imgUrl: "img/6.png",
//         name: "（比尔德）黑白巧克力",
//         explain: "优质芒果的三种姿态，与青柠酸乳酪夹心",
//         labels: ["聚会", "新品"],
//         price: 398
//     }, {
//         id: 7,
//         imgUrl: "img/7.png",
//         name: "芒果奶油蛋糕",
//         explain: "自然成熟，应季现切芒果",
//         labels: ["情侣", "童趣", "人气", "聚会"],
//         price: 598
//     }, {
//         id: 8,
//         imgUrl: "img/8.png",
//         name: "朗姆芝士",
//         explain: "酒香,味苦，清新的柠檬",
//         labels: ["情侣", "白色情人节"],
//         price: 298
//     }]
// }]

// // 对象转字符串
// localStorage.setItem("goodlist", JSON.stringify(obj))


// 页面数据

var obj = [{
    // 标题
    title: "新品",
    // title2:"专区"
    // 大图
    bigImg: "img/big1.jpg",
    // 列表
    list: [
        {
            id: 1,
            imgUrl: "img/1.png",
            name: "浅草",
            explain: "中国绿茶与爽脆果实",
            labels: ["新品", "人气"],
            price: 298
        },
        {
            id: 2,
            imgUrl: "img/2.png",
            name: "芒果慕斯",
            explain: "优质芒果的三种姿态，与青柠酸乳酪夹心",
            labels: ["童趣", "聚会", "新品"],
            price: 298
        },
        {
            id: 3,
            imgUrl: "img/3.png",
            name: "榴莲飘飘",
            explain: "榴莲狂热者的不二之选",
            labels: ["新品", "人气", "聚会"],
            price: 298
        },
        {
            id: 4,
            imgUrl: "img/4.png",
            name: "(新)栗荣暗香",
            explain: "记忆中的栗子蛋糕，几代人恰好的团聚",
            labels: ["童趣", "长辈", "聚会"],
            price: 198
        }
    ]
}, {
    // 标题
    title: "人气",
    // title2:"专区"
    // 大图
    bigImg: "img/big2.jpg",
    // 列表
    list: [
        {
            id: 5,
            imgUrl: "img/5.png",
            name: "百丽甜情人",
            explain: "爱尔兰百利甜酒，新西兰奶油",
            labels: ["聚会", "情侣", "人气"],
            price: 298
        },
        {
            id: 6,
            imgUrl: "img/6.png",
            name: "（比尔得）黑白巧克力慕斯",
            explain: "白巧克力慕斯的甜，与黑巧克力酱的库",
            labels: ["聚会", "新品"],
            price: 298
        },
        {
            id: 7,
            imgUrl: "img/7.png",
            name: "芒果奶牛蛋糕",
            explain: "自然成熟，应季现切芒果",
            labels: ["情侣", "童趣", "人气", "聚会"],
            price: 123
        },
        {
            id: 8,
            imgUrl: "img/8.png",
            name: "朗姆芝士",
            explain: "酒香，微苦，清新的柠檬",
            labels: ["情侣", "白色情人节"],
            price: 198
        }
    ]
}]

// 对象转字符串
localStorage.setItem("goodsList",JSON.stringify(obj))
