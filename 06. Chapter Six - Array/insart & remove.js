var arr = [1, 2, 3, 4]

console.log(arr)
arr.push(5) // add a element to last of array
console.log(arr)

arr.unshift(10)
console.log(arr) // add a element to first of array

arr.splice(3, 0, 11, 12) // add a element to specific index
/*
    first parameter = index of element
    second parameter = delete count
    third & others = new elements to add
*/
console.log(arr)

arr.pop() // remove from last of array
console.log(arr)

arr.shift() // remove from first of array
console.log(arr)