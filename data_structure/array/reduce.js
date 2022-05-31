const arr = [
    { name: 'Sam', age: 23 },
    { name: 'Vince', age: 22 }
]

// { Sam: 23, Vince: 22 }

let res = arr.reduce((pre, cur) => {
    pre[cur.name] = cur.age
    return pre
}, {})

console.log(res);

function* geneFn(init) {
    console.log(init);
    console.log(yield);
    console.log(yield);
}

let geneO = geneFn('foo')
geneO.next('bar')
geneO.next('baz')
geneO.next('qux')


