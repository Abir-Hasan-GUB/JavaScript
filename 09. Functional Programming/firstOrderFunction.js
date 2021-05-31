/*
    Rules to be first order function
    -- It can be stored in a variable
    -- It can be stored as array element
    -- It can be stored as object element
    -- If we want anytime create a inner function
    -- Able to pass a function as the arguments
    -- Return a function as the others functions return
*/

function add(a, b) {
    return a + b
}

var sum = add // it accept the first rule

var arr = []
arr.push(sum) // it accept the second rule

var obj = {
    sum: sum // it accept the third rule
}

setTimeout(function () {  // it accept the fourth rule
    console.log("Hello world!")
}, 1000)