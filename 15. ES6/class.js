class Rectangle {
    constractor(width, height){
        this.width = width
        this.height = height
    }

    draw(){
        console.log('Drawing...')
    }
   
   
}

let rect1 = new Rectangle(10, 20)
// console.log(rect1.print(10, 20))
console.log(rect1)