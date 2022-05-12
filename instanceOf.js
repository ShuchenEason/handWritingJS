let toString = Object.prototype.toString

// console.log(toString.call(1)) // [object Number]
// console.log(toString.call('1')) // [object String]
// console.log(toString.call(true)) // [object Boolean]
// console.log(toString.call(undefined)) // [object Undefined]
// console.log(toString.call(null)) // [object Null]
// console.log(toString.call({})) // [object Object]
// console.log(toString.call([])) // [object Array]
// console.log(toString.call(function () { })) // [object Function]
// console.log(toString.call(new Date)) // [object Date]

function myInstanceof(left, right) {
    // 获得实例对象的原型 也就是 left.__proto__
    left = Object.getPrototypeOf(left)
    // 获得构造函数的原型
    let prototype = right.prototype
    // 判断构造函数的原型 是不是 在实例的原型链上
    while (true) {
        // 原型链一层层向上找，都没找到 最终会为 null
        if (left === null) return false
        if (prototype === left) return true
        // 没找到就把上一层拿过来，继续循环，再向上一层找
        left = Object.getPrototypeOf(left)
    }
}

function getType(value) {
    if (value === null) {
        return value + ""
    }
    if (typeof value === "object") {
        // 数组、对象、函数 typeof 都是 object，所以需要处理下
        value = Object.prototype.toString.call(value).slice(8, -1) // 如对象得到这样 Object
        return value.toLowerCase() // object
    } else {
        return typeof value;
    }
}
a = { b: 1 }

console.log(getType(a));

