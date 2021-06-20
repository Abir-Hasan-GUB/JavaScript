let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])

for(let [key, value] of map){
    console.log(`Key: ${key} => Value: ${value}`)
}