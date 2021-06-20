let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])

map.forEach((v, k) => {
    console.log(`Key: ${k}, Value: ${v}`)
})