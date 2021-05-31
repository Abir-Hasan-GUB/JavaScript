function curring(a) {
    console.log('a:' + a)
    return function (b) {
        console.log('b:' + b)
        return function (c) {
            console.log('c:' + c)
            return a + b + c
        }
    }
}

console.log(curring(5)(10)(15))