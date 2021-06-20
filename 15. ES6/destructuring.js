let obj = {
    Name: 'Abir Hasan', 
    age: 22,
    email: 'abirhasan6111@gmail.com'
}

let {Name, email} = obj
console.log('Name: ' + Name + '\n' + 'Email: ' + email)

let person = {
    name: 'Abir Hasan',
    print: {
        city: 'Dhaka',
        uv: 'GUB'
    }
}

let {name, print: {city}} = person

console.log('City: ' + city)