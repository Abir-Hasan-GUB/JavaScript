let set = new Set([1, 2, 3, 4]);
set.add(5)
set.delete(3)
console.log(set.has(3))
console.log(set)
console.log(set.keys)
console.log(set.values)
console.log(set.entries)
set.clear()
console.log(set)