var obj1 = {
    name: 'Abir Hasan',
    age: 21
}

var obj2 = {
    name: 'Abir Hasan',
    age: 21
}

// normal comparison oparation (== / ===) not working
console.log(obj1 === obj2) // give false but should be true

// coplicat comparison
console.log(obj1.name === obj2.name && obj1.age === obj2.age)

// tricks to compare easily
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))