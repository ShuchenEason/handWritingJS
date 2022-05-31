
let arr = [12, 34, 56, 78, 5, 6]

function largestNumber(arr, m, n) {
    let bigArr = [[], []]
    arr.forEach(e => {
        bigArr[e.toString().length - 1].push(e.toString())
    })
    bigArr.forEach(arr => arr.sort())

    let resArr = []
    if (n >= bigArr[1].length) {
        resArr = bigArr[1]
        let cnt = bigArr[1].length - n
        resArr = resArr.concat(bigArr[0].slice(cnt))
    } else {
        resArr = bigArr[1].slice(-n)
    }

    let res = stringSort(resArr)
    return res.join('')

}
function stringSort(arr) {
    arr.sort((a, b) => {
        return `${b}${a}` - `${a}${b}`
    })
    return arr
}
console.log(largestNumber(arr, 4, 5));