var obj = {
    name: 'Abir Hasan',
    age: 21,
    maritalStatus: 'unmarid',
    university: 'Green University of Bangladesh',
    Department: 'CSE',
    village: 'Soyedpur'
}

console.log(obj)
console.log('\n------------- After Delet a propertices ---------------')

delete obj.village // remove a property using 'delete' keyword
console.log(obj)