function Square(width){
    this.width = width
}

Square.prototype = {
    draw: function (){
        console.log("I'm drawing...")
    },
    toString: function (){
        return 'My width is  ' + this.width // get 'this' property form parent portion of prototype
    }
}

var ob1 = new Square(10)
var ob2 = new Square(20)

