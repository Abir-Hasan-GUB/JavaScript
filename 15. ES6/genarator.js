const array = [1, 2, 3, 4]

function* genarate(){
    yield 1
    yield 2
    yield 3
}

let it = genarate()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* genarate2(collection){
    for(let i=0; i < collection.length; i++){
        yield collection[i]
    }
}

let iterator = genarate2(array)
console.log('\n' + '----------Second iteration----------')

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())