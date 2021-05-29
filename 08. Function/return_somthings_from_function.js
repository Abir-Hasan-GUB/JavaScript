function sumation() {
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log("Summation is: " + sumation(1,2,3,4))