let val = 1
function foo() {
    console.log(val);
}
function bar() {
    let val = 2
    foo()
}
bar()

// window.name = 'ByteDance'
// function A() {
//     this.name = 123
// }
// A.prototype.getA = function () {
//     return this.name + 1
// }
// let a = new A()
// let funcA = a.getA
// console.log(funcA()); // ByteDance1
// console.log(a.getA()); // 124



// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
// async1();
// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');


const obj = {
    birth: 1990,
    getAge(year) {
        let fn = y => y - this.birth;
        return fn.call({ birth: 2000 }, year);
    },
};
console.log(obj.getAge(2020));


setTimeout(_ => console.log(1))

new Promise(resolve => {
    resolve()
    console.log(2)
}).then(_ => {
    setTimeout(_ => console.log(3))
    console.log(4)
    Promise.resolve().then(_ => {
        console.log(5)
    }).then(_ => {
        Promise.resolve().then(_ => {
            console.log(6)
        })
    })
})

console.log(7);