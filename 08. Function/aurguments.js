// here 'arguments' represents all arguments of the function

function sum() {
    let sumation = 0
    for(var i = 0; i < arguments.length; i++){
        sumation += arguments[i]
    }
    console.log(sumation)
}

sum(1, 2, 3)