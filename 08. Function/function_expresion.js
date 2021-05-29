// If a function store in a variable then it's called function expression

var difference = function (a, b){
    return a - b
}

var getDifference = difference
console.log("Difference is " + getDifference(20,10))