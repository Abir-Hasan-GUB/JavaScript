const list = document.getElementById('list')
let firstChild = list.firstElementChild
console.log(firstChild)

setTimeout(() => {
    firstChild.innerHTML = `${firstChild.innerHTML} (Modified)`
    firstChild.style.backgroundColor = 'red'
    list.lastElementChild.style.backgroundColor='orange'
}, 3000)

setTimeout(() => {
    list.lastElementChild.remove()
}, 4000)
setTimeout(() => {
    list.lastElementChild.remove()
}, 5000)

setTimeout(() => {
    list.lastElementChild.remove()
    let header = document.querySelector('#header')
    header.classList.add("display-1")
    header.style.color = 'red'
    header.innerHTML = 'All items Removed ...'

}, 6000)