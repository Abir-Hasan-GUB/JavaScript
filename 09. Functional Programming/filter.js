var array = [1, 2, 3, 4]

// var filteredArray = array.filter(function(number, index, array) {
//     return number % 2 == 0
// })

// console.log(array)
// console.log(filteredArray)

// custom filter function

function myFilter(array, callBack) {
    var filteredArray = []
    for (var i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            filteredArray.push(array[i])
        }
    }
    return filteredArray
}

var customFilterArray = myFilter(array, function (value, i, array) {
    // console.log(i, array)
    return value % 2 === 0
})
// console.log(array)
console.log(customFilterArray)