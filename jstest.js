// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000)
// }

// Promise.resolve().then(() => {
//     console.log('第一个回调函数：微任务1')
//     setTimeout(() => {
//         console.log('第三个回调函数：宏任务2')
//     }, 5000)
// })
// setTimeout(() => {
//     console.log('第二个回调函数：宏任务1')
//     Promise.resolve().then(() => {
//         console.log('第四个回调函数：微任务2')
//     })
// }, 5000)

// 手写遍历器
// let obj = { x: 1, y: 2, z: 3 }

// obj[Symbol.iterator] = function () {
//     return {
//         next: function () {
//             let objArr = Reflect.ownKeys(obj)
//             if (this.index < objArr.length - 1) {
//                 let key = objArr[this.index]
//                 this.index++
//                 return {
//                     value: obj[key]
//                 }
//             } else {
//                 return { done: true }
//             }
//         },
//         index: 0
//     }
// }

// console.log(...obj);

// var name = 222
// var a = {
//     name: 111,
//     say: function () {
//         console.log(this.name);
//     }
// }
// var fun = a.say
// fun()
// a.say()

// var b = {
//     name: 333,
//     say: function (fn) {
//         fn()
//     }
// }
// b.say(a.say)
// b.say = a.say
// b.say()

// arr = [1, 2, 3, [4, 5, 6]]

// console.log(arr);

// arr = [1].concat(...arr)

// console.log(arr);

// console.log([1, 2].valueOf());

// var a = ["a", "b", "c", "d"]
// var b = {
//     a: 1,
//     b: 2,

// }

// for (var val, ret, it = a[Symbol.iterator](); (ret = it.next()) && !ret.done;) {
//     val = ret.value
//     console.log(val);
// }
// console.log(a[Symbol.iterator]);

var iframe = document.createElement("iframe")
document.body.appendChild(iframe)
var xArray = window.frames[window.frames.length - 1].Array
var arr = new xArray(1, 2, 3)
console.log(typeof arr);
console.log(arr instanceof Array);