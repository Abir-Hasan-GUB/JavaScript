const list = document.getElementById('list')
let firstChild = list.firstElementChild
// console.log(firstChild)

setTimeout(() => {
    firstChild.innerHTML = `${firstChild.innerHTML} (Modified)`
    firstChild.style.backgroundColor = 'red'
    list.lastElementChild.style.backgroundColor='orange'
}, 3000)

let lastItem = list.lastElementChild.cloneNode() // clone a node
// if need to deep clone then pass 'true' in the "cloneNode('true')"
lastItem.innerHTML = 'Four'
list.appendChild(lastItem)