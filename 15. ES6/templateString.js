const name = 'Abir Hasan', age = 22

let str = `Hello I am ${name} my age is ${age}`
console.log(str)

let str2 = 'Hello World! '
console.log(str2.padStart(str2.length + 2, 'a')) // fill all missing characters from the start of the string

console.log(str2.padEnd(str2.length + 2, 'b')) // fill all missing characters from the end of the string
console.log(str2.repeat(5)) // repeat the string until the limit is reached