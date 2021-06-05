var width = 11
var height = 12

var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    var position = {
        x: 10, 
        y: 20
    }

    var print = function(){
        console.log("My Width is: " + this.width)
        console.log("My Height is: " + this.height)
    }

    this.draw = function (){
        console.log("I am a rectangle")
        print()
        console.log('Position: X = ' + position.x +  ' Y = ' + position.y)
    }
}

var rect1 = new Rectangle(10, 20)
rect1.draw()