/*
    Rules to be first order function
    -- It can be stored in a variable
    -- It can be stored as array element
    -- It can be stored as object element
    -- If we want anytime create a inner function
    -- Able to pass a function as the arguments **
    -- Return a function as the others functions return **
*/

function add(a, b) {
    return a + b
}

function manupulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply(){
        var m = func(a, b)
        return c * d * m
    }
    return multiply // return and call the multiply function
}

// console.log(typeof manupulate)

var multiply = manupulate(3, 4, add)
console.log(multiply())