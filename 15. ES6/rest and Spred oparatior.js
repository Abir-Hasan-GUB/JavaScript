function add(...rest) {
    return rest.reduce((a, b) => a + b)
}

console.log(add(1,2,3,4))

let a = [1, 2, 3, 4]
console.log(...a)

let obj = {
    a: 1,
    b: 2,
    c: 4
}

let obj2 = {
    ...obj
}

console.log(obj2)