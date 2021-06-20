// use under_score for which will be hidden from the world

const _radius = new WeakMap()
const _name = new WeakMap()

class Circle {
    constractor (radius, name){
       _radius.set(this, radius)
       _name.set(this, name)
    }

    draw(){
        console.log("Drawing ...")
        console.log(_radius.get(this), _name.get(this))
    }
   get radius(){ // use get keyword to get any properties
        return _radius.get(this)
    }
    set radius(v){ // use set keyword to set any properties
        _radius.set(this, v)
    }
}

let c1 = new Circle(2, 'CRED')
c1.draw()
console.log(c1.radius)
c1.radius = 100
console.log(c1.radius)