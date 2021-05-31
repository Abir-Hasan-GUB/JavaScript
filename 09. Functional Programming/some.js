// find at least one statement is true

var array1 = [1, 2, 4, 6]
var checkAtLeastOneOdd = array1.some(function(value){
    return value % 2 == 1
})
console.log(checkAtLeastOneOdd)