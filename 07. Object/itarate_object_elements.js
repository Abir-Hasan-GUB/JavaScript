var obj = {
    name: 'Abir Hasan',
    age: 21,
    maritalStatus: 'unmarid',
    university: 'Green University of Bangladesh'
}

// use for in loop to itarate the object properties
for(var key in obj) {
    console.log(key + ': ' + obj[key])
}