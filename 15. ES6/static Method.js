class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(this.name, this.email)
    }
    static create(str){
        let person = JSON.parse(str)
        return new Person(person.name, person.email) // create a new object
    }
}

let str = '{"name":"Abir Hasan", "email":"abirhasan@gmail.com"}'

let p1 = Person.create(str)
console.log(p1)
p1.print()