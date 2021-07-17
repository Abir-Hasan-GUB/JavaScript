var object = {
    name: 'Abir Hasan',
    age: 21
}



var prototype = Object.getPrototypeOf(object.name) // get the prototype of the object key
console.log( prototype)

var descriptor = Object.getOwnPropertyDescriptor(prototype, 'toString')
console.log( descriptor)

Object.defineProperty(prototype, 'toString', { // chenge the original value of build in property
    value: function toString() {
        console.log("I'm toString Function Updated !")
    }
})
console.log( descriptor)
console.log(object.name.toString())