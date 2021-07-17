function Shape(){

}

Shape.prototype = {
    common: function (){
        console.log("I am common method!")
    }
}

function Square(width){
    this.width = width
}

// object duplication
Square.prototype = Object.create(Shape.prototype) // copy from Shape proto

Square.prototype.draw = function (){
        console.log('Drawing...')
    }

function Circle(radius){
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype) // copy from Shap proto
Circle.prototype.print = function(){
    console.log('Radius: ', this.radius)
}

var shape = new Shape()
var sqr = new Square(10)
var circle = new Circle(Math.PI)