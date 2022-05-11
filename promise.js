// example

// console.log('1');

// setTimeout(function () {
//     console.log('2');
//     process.nextTick(function () {
//         console.log('3');
//     })
//     new Promise(function (resolve) {
//         console.log('4');
//         resolve();
//     }).then(function () {
//         console.log('5')
//     })
// })
// process.nextTick(function () {
//     console.log('6');
// })
// new Promise(function (resolve) {
//     console.log('7');
//     resolve();
// }).then(function () {
//     console.log('8')
// })

// setTimeout(function () {
//     console.log('9');
//     process.nextTick(function () {
//         console.log('10');
//     })
//     new Promise(function (resolve) {
//         console.log('11');
//         resolve();
//     }).then(function () {
//         console.log('12')
//     })
// })

//1 7 6 8 2 4 3 5 9 11 10 12

// Promise.resolve()

// function _resolve(value) {
//     if (value instanceof Promise) {
//         return value
//     }
//     return new Promise((resolve, reject) => {
//         if (value?.then && typeof (value.then) === 'function') {
//             value.then(resolve, reject)
//         } else {
//             resolve(value)
//         }
//     })
// }

// var p = _resolve({
//     then: function (onFulfill, onReject) { onFulfill("fulfilled!"); }
// });
// console.log(p)

// Promise.reject()

// function _reject(reason) {
//     return new Promise((resolve, reject) => {
//         reject(reason)
//     })
// }

// Promise.all()

Promise.myAll = (promises) => {
    if (!promises || !promises[Symbol.iterator]) {
        throw new TypeError('object is not iterable')
    }
    return new Promise((resolve, reject) => {
        // 计数器
        let count = 0
        // 存放结果
        let result = []
        const len = promises.length

        if (len === 0) {
            return resolve([])
        }

        promises.forEach((p, i) => {
            // 注意有的数组项有可能不是Promise，需要手动转化一下
            Promise.resolve(p).then((res) => {
                count += 1
                // 收集每个Promise的返回值 
                result[i] = res
                // 当所有的Promise都成功了，那么将返回的Promise结果设置为result
                if (count === len) {
                    resolve(result)
                }
                // 监听数组项中的Promise catch只要有一个失败，那么我们自己返回的Promise也会失败
            }).catch(reject)
        })
    })
}

// Promise.allSettled
Promise.myAllSettled = (promises) => {
    if (!promises || !promises[Symbol.iterator]) {
        throw new TypeError('object is not iterable')
    }
    return new Promise((resolve, reject) => {
        let count = 0
        let result = []
        const len = promises.length
        // 数组是空的话，直接返回空数据
        if (len === 0) {
            return resolve([])
        }

        promises.forEach((p, i) => {
            Promise.resolve(p).then((res) => {
                count += 1
                // 成功属性设置 
                result[i] = {
                    status: 'fulfilled',
                    value: res
                }

                if (count === len) {
                    resolve(result)
                }
            }).catch((err) => {
                count += 1
                // 失败属性设置 
                result[i] = {
                    status: 'rejected',
                    reason: err
                }

                if (count === len) {
                    resolve(result)
                }
            })
        })
    })
}

// Promise.race()

Promise.myRace = (promises) => {
    if (!promises || !promises[Symbol.iterator]) {
        throw new TypeError('object is not iterable')
    }

    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            // 对p进行一次包装，防止非Promise对象
            // 并且对齐进行监听，将我们自己返回的Promise的resolve，reject传递给p，哪个先改变状态，我们返回的Promise也将会是什么状态
            Promise.resolve(p).then(resolve).catch(reject)
        })
    })
}

// Promise.any()

Promise.myAny = (promises) => {
    if (!promises || !promises[Symbol.iterator]) {
        throw new TypeError('object is not iterable')
    }

    return new Promise((resolve, reject) => {
        // 计数器
        let count = 0
        // 存放结果
        let result = []
        const len = promises.length

        if (len === 0) {
            return resolve(new Error(result))
        }

        promises.forEach((p, i) => {
            // 注意有的数组项有可能不是Promise，需要手动转化一下
            Promise.resolve(p).then((value) => {
                resolve(value)
            }).catch(reason => {
                count += 1
                // 收集每个Promise的失败值 
                result[i] = reason
                // 当所有的Promise都失败了，那么将返回的Promise错误设置为result
                if (count === len) {
                    reject(new Error(result))
                }
            })
        })
    })
}


const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
    setTimeout(() => resolve(3), 3000)
})
const p4 = Promise.reject('err4')

const p = Promise.myAny([p1, p2, p4])
    .then(console.log)
    .catch(console.log)
