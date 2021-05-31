function greet(msg) {
    function greetings(name) {
        return msg + ' ' + name + '!'
    }
    return greetings
}

var goodMornings = greet('Good Morning')
var msg = goodMornings('Abir Hasan')

console.log(msg)

// *********** Another Example *********************

function base(b){
    return function(n){
        var result = 1
        for (var i = 0; i < b; i++){
            result *= n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))