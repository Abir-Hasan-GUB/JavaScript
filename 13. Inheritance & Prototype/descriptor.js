var person = {
    name: "Abir Hasan"
}

console.log(Object.keys(person)) // print all Object keys

var descriptors = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptors)
console.log('name: ' + person.name)

Object.defineProperty(person, 'name', { // update all information for 'name' key
    enumerable: false,
    writable: false,
    configurable: false,
    value: "I am Chenged ABIR"
})

console.log('name: ' + person.name)