class Shape {
    constructor(color) {
        this.color = color;
    }
    draw(){
        console.log("Drawing ...")
    }
}

class Rectangle extends Shape {
    constructor(color, width, height){
        super(color)
        this.width = width;
        this.height = height;
    }
    calculate(){
        return this.width * this.height;
    }
}

let r = new Rectangle('Green', 4, 5)
console.log(r)
let r2 = new Shape('Red')
console.log(r2)
r.draw()