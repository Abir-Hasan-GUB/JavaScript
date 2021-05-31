// Check all statements is true

var array = [1, 3, 5, 7]

var checkEven = array.every(function(value){
    return value % 2 == 1
})

console.log(checkEven)
