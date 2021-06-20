let array = [1, 2, 3, 4]

let itarate = array[Symbol.iterator]()

// here, 'array[Symbol.iterator]' is a function
// if call it immediately then it return a itarateable function (next)

console.log(itarate.next())
console.log(itarate.next())
console.log(itarate.next())
console.log(itarate.next())
console.log(itarate.next())