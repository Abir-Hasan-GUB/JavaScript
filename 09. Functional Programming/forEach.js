var arr = [10, 20, 30, 40, 50]

// arr.forEach(function (value, index, arr) {
//     console.log(value, index, arr)
// })

// custom forEach method

var sum = 0
function myForEach(array, callBack) {
    for (var i = 0; i < array.length; i++) {
        callBack(array[i], i, array)
    }
}

myForEach(arr, function (value, index, array) {
    console.log(value, index, array)
    sum += value
})
console.log(sum)