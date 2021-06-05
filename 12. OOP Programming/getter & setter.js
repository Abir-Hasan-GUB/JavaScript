var width = 11
var height = 12

var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    var position = {
        x: 10,
        y: 20
    }

    var print = function () {
        console.log("My Width is: " + this.width)
        console.log("My Height is: " + this.height)
    }.bind(this)

    this.draw = function () {
        console.log("I am a rectangle")
        print()
        console.log('Position: X = ' + position.x + ' Y = ' + position.y)
    }

    Object.defineProperty(this, 'position', {
        get: function () { // here must write 'get' not another name
            return position
        },
        set: function (value) { // here must write 'set' not another name
            position = value
        }
    })

}

var rect1 = new Rectangle(10, 20)
rect1.draw()
console.log(rect1.position)
console.log(rect1.position = {
    x: 456,
    y: 123
})
rect1.draw()