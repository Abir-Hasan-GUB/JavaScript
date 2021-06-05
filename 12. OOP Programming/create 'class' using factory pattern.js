var createRect = function(width, height) {
    return {
        width,
        height,

        draw: function(){
            console.log('I am a rectangle')
            this.printProperties()
            // console.log(this)
        },

        printProperties: function (){
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
    } 
}

var rect1 = createRect(10, 20)
rect1.draw()

console.log('\n')
createRect(30, 40).draw()
