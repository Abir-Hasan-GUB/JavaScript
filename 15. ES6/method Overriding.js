class Parent{
    constructor(name){
        this.name = name;
    }
    print(){
       return "Parnet name: " + this.name;
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name = name;
    }
    print(){
        return "Child name: " + this.name;
    }
}

let child = new Child('Abir Hasan')
console.log(child.print())