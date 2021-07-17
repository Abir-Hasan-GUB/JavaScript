function setTimeoutTest(){
    setTimeout(function() {
        console.log('I am showing after 5 seconds...')
    }, 5000);
    
}

setTimeoutTest();

let testTime1 = () => {setTimeout(() => console.log('I am showing after 3 seconds...'), 3000)}
testTime1();

let testTime2 = () => {setTimeout(() => console.log('I am showing after 4 seconds...'), 4000)}
testTime2();

let testTime3 = () => {setTimeout(() => console.log('I am showing after 2 seconds...'), 2000)}
testTime3();

let testTime4 = () => {setTimeout(() => console.log('I am showing after 1 second...'), 1000)}
testTime4();

console.log('I am not asyncrhonuse function...')