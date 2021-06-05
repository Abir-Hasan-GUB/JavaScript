function printNumber(range) {
    for(let i = 0; i < range ; i++){
        setTimeout(function() {
            console.log("Hello World !! -> " + (i + 1));
        }, i * 1000);
    }
}

printNumber(10)