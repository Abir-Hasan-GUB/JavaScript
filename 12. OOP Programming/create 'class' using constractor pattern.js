var createRect = function(width, height) {
        this.width = width
        this.height = height

        this.draw = function(){
            console.log('I am a rectangle')
            this.printProperties()
            // console.log(this)
        }

        this.printProperties = function (){
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
}

var rect1 = new createRect(10, 20)
rect1.draw()

