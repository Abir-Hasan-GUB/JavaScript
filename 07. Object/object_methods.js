var obj = {
    name: 'Abir Hasan',
    age: 21,
    maritalStatus: 'unmarid'
}

// find all keys of object
console.log(Object.keys(obj)) // return a keys array

// find all values of object
console.log(Object.values(obj)) // return a values array

//return object as 2d array system with values and keys
console.log(Object.entries(obj)) // return a 2d array

// clone a object
var newObj = Object.assign({}, obj) // return a new object
console.log(newObj)