var number = 99
var obj = {
    number: 50
}
console.log(obj.number, number)

function passByValue(num){
    number = num
    console.log(number)
}

passByValue(number) //pass by value
console.log(number) // not chenge the original value

function passByReference(num){
    obj.number =  num
    console.log(obj.number)
}

passByReference(55) //pass by reference
console.log(obj.number) // chenge the original value