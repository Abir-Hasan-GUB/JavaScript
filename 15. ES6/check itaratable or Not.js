function isItarate(obj) {
    return typeof obj[Symbol.iterator] === 'function'
}
let array = [1,2]
console.log(isItarate([1, 2, 3]))