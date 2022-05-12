// 来个示例数组
let arr = [1, [2, [3, [4, [5]]]]]

// 方法一
// flat() 默认拉平一层嵌套数组，传入数字几就拉平几层
// Infinity 是无穷大，不管嵌套多少层都给你拉平
let brr1 = arr.flat(Infinity)
console.log(brr1) // [1, 2, 3, 4, 5]

// 方法二
// 转成字符串，再去掉字符串里的 “[” 和 “]”，再把字符串转回数组
let brr2 = JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]")
console.log(brr2) // [1, 2, 3, 4, 5]


let brr4 = Array.from(arr.toString().split(',')).map(item => {
    return parseInt(item)
})
console.log((brr4));
// 方法三
let brr3 = arr => {
    // 用递归，用 for 循环加递归也可以，这里用 reduce
    // reduce 累计器，本质上也是循环，
    // cur 是循环的当前一个值，相当于 for循环里的arr[i]， pre 是前一个值，相当于for循环里的arr[i-1]
    let crr = arr.reduce((pre, cur) => {
        // return pre.concat(Array.isArray(cur) ? brr3(cur) : cur);
        return Array.isArray(cur) ? [...pre, ...brr3(cur)] : [...pre, cur]
    }, [])

    return crr
}
console.log(brr3(arr)) // [1, 2, 3, 4, 5]

let brr5 = arr => {
    return Array.isArray(arr) ? arr.reduce((pre, cur) => {
        return [...pre, ...brr5(cur)]
    }, []) : [arr]

}
console.log(brr5(arr))