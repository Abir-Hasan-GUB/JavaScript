// convert a object to an array

let obj = {
    name: 'Abir Hasan',
    age: 21,
    uv: 'Green University of Bangladesh'
}

let convertedObjArray = Object.entries(obj)
console.log(convertedObjArray)
console.log(convertedObjArray[0][0] + ': ' + convertedObjArray[0][1])