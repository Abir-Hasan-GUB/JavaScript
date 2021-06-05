// call and apply method are call immediately

function myFunc(c, d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call({a: 10, b: 20}, 11, 12)

myFunc.apply({a: 11, b:21}, [12, 13])

var testBind1 = myFunc.bind({a: 13, b: 22}, 14, 15) // return a function
var testBind2 = myFunc.bind({a: 13, b: 22}) // return a function
testBind1()
testBind2(16, 17) // pass arguments when call finally a bind method