// example
let arr = [1, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined]

let uniq = Array.from(new Set(arr))
// console.log(uniq);

let uniq2 = arr => {
    let hash = new Map()
    let result = []
    arr.forEach(item => {
        if (!hash.has(item)) {
            hash.set(item, true)
            result.push(item)
        }
    })
    return result
}
// console.log(uniq2(arr));

let uniq3 = arr => {
    let result = []
    arr.forEach(item => {
        // if (result.indexOf(item) === -1) result.push(item)
        if (!result.includes(item)) result.push(item)
    })
    return result
}
// console.log(uniq3(arr));

let uniq4 = arr => {
    let result = arr.filter((item, idx) => {
        return arr.indexOf(item) === idx
    })
    return result
}
console.log(uniq4(arr));
