const date = new Date()
let toDay = date.getDay() + 1

switch (toDay) {
    case 0: console.log("SATARDAY")
    break

    case 1: console.log("SUNDAY")
    break

    case 2: console.log("MONDAY")
    break

    case 3: console.log("TWESDAY")
    break

    case 4: console.log("WEDNESDAY")
    break

    case 5: console.log("THURSDAY")
    break

    case 6: console.log("FRIDAY")
    break

    default: console.log("PLEASE PROVIDE VALID DAY NUMBER")
}