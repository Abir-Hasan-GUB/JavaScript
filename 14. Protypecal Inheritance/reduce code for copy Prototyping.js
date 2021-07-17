function extend(child, parent){
    child.prototype = Object.create(parent.prototype)
}

// reset constractor after extend prototype
function resetConstructor(constractor){
    constractor.prototype.constractor = constractor // reset constractor
}

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
resetConstructor(Square)// reset constractor

Square.prototype.draw = function (){
        console.log('Drawing...')
    }

function Circle(radius){
    this.radius = radius
}

extend(Circle, Shape) // copy from Shap proto
resetConstructor(Circle)

Circle.prototype.print = function(){
    console.log('Radius: ', this.radius)
}

function Area(radius){
    this.radius = radius
}
extend(Area, Shape) // copy from Shap
resetConstructor(Area)

var shape = new Shape()
var sqr = new Square(10)
var circle = new Circle(Math.PI)
var area = new Area(Math.PI)