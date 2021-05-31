var array = [1, 2, 3, 4]

// var newArray = array.map(function(value, index, array) {
//     return value = value * value
// })

// console.log(array)
// console.log(newArray)

// custom  map function

function myMap(array, callBack) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        // var temp = (array[i] * array[i])
        var temp = callBack(array[i], i, array)
        newArray.push(temp)
    }
    // console.log(newArray)
    return newArray
}
// console.log(array)

var qube = myMap(array, function(value){
    return value * value * value
})
console.log(qube)