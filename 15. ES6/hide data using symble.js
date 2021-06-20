// use under_score for which will be hidden from the world

const _radius = Symbol()
const _name = Symbol()

class Circle {
    constractor (radius, name){
        this[_radius] = radius
        this[_name] = name
    }

    draw(){
        console.log("Drawing ...")
    }
}

let c1 = new Circle(2, 'CRED')
console.log(c1)