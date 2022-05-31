function myNew(constructor) {
    if (typeof constructor !== 'function') {
        throw 'The first param must be a function';
    }
    myNew.target = constructor;
    let newObj = Object.create(constructor.prototype);
    var argsArr = [].slice.call(arguments, 1);
    var result = constructor.apply(newObj, argsArr);
    var isObject = typeof result === 'object' && result !== null;
    var isFunction = typeof result === 'function';
    if (isObject || isFunction) {
        return result;
    }
    return newObj;
}
function Test() {
    this.name = 'jack'
    this.age = 23
    return 23
}
x = myNew(Test)

console.log(x);