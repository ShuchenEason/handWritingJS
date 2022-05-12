// call

Function.prototype.myCall = function (that) {
    that = that || window
    let symbol = Symbol()
    that[symbol] = this
    let result = that[symbol](...arguments)
    delete that[symbol]
    return result
}


// apply

Function.prototype.myApply = function (that) {
    that = that || window
    let symbol = Symbol()
    that[symbol] = this
    let result
    if (arguments[1]) {
        result = that[symbol](...arguments[1])
    } else {
        result = that[symbol]()
    }
    delete that[symbol]
    return result
}

Function.prototype.myBind = function (that, ...args) {
    const fn = this
    args = args ? args : []
    return function newFn(...newFnArgs) {
        if (this instanceof newFn) {
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(that, [...args, ...newFnArgs])
    }
}


let obj = { name: "沐华" }
function foo() { return this.name }
// 就是把 foo 函数里的 this 指向，指向 obj
console.log(foo.myBind(obj)()) // 沐华 