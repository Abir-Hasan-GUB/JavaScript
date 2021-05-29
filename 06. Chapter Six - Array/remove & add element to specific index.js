var arr = [1, 2, 3, 4]

arr.splice(2,1) // remove 1 element from index 2
console.log(arr)

arr.splice(1) // remove all elements from index 1
console.log(arr)

arr.splice(1, 0, 2, 3) // add 2 elements
console.log(arr)