// coustom system to count string length

let string = "My name is Abir Hasan"
let strLen = 0;

while (true) {
    if (string.charAt(strLen) == '') break
    else strLen++
}
console.log("String Length: " + strLen)

// short system

console.log("String Length in short system: " + string.length)