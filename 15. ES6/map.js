let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])

console.log(map)

map.set('d', 4)
console.log(map)
console.log(map.get('a'))
console.log(map.keys())
console.log(map.values())