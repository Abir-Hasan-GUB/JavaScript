var person = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    },
]

var arr = [4, 8, 65, 11, 23, 74, 47, 1]
arr.sort(function (a, b) {
    if (a > b) {
        return 1
    }
    else if (a < b) {
        return -1
    }
    else {
        return 0
    }
})
console.log(arr)

person.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    }
    else if (a.age < b.age) {
        return -1
    }
    else {
        return 0
    }
})
console.log(person)