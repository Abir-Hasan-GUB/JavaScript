var array = [1, 2, 3, 4, 5]
var array2 = [6, 7, 8, 9, 10]

// join all elements by a separator and get a string representation
console.log(array.join(','))

// merge 2 array
var merged = array.concat(array2)
console.log(merged)

// fill all elements by a custom single element
console.log(array.fill(0)) // replace main array
console.log(array)

// test a collection is array or not
console.log(Array.isArray(array))

// clone a array
var newArray = Array.from(array2)
console.log(newArray)