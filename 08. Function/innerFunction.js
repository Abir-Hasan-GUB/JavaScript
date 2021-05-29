function printFirstName(name) {
    var fullName = name // get youser input(full name)
    function getFirstName() {
        var firstName = fullName.split(' ')[0] // convert to array and get first index values
        return firstName // return first name
    }
    fullName = getFirstName() // replace full name with first name
    return fullName // return first name
}

function printLastName(name) {
    var fullName = name // get youser input(full name)
    function getLastName() {
        var nameArray = fullName.split(' ') // convert to array and get first index values
        var lastName = nameArray[nameArray.length - 1] // get last name
        return lastName // return last name
    }
    fullName = getLastName() // replace full name with first name
    return fullName // return first name
}


var yourFullName = "Abir Hasan" // full name

console.log("First Name: " + printFirstName(yourFullName)) // print first name
console.log("Last Name: " + printLastName(yourFullName)) // print first name