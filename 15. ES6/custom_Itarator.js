const array = [1, 2, 3, 4]

function createItarator(collection){
    let start = 0
    return{
        next(){
            return{
                done: start >= collection.length,
                value: collection[start++]
            }
        }
    }
}

let itarate = createItarator(array)
console.log(itarate.next())
console.log(itarate.next())
console.log(itarate.next())
console.log(itarate.next())
console.log(itarate.next())