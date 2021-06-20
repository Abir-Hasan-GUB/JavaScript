let a = {a: 10}, b = {b: 20}
let weekSet = new WeakSet([a, b])
a = null
console.log(weekSet)