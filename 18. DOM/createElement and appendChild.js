const list = document.getElementById('list')

let li = createElement('li', 'list-group-item', 'Four')
list.appendChild(li)

let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam laboriosam omnis sunt unde quibusdam molestiae consectetur voluptates consequatur modi?')

let p2 = createElement('p','lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam laboriosam omnis sunt unde quibusdam molestiae consectetur voluptates consequatur modi?')

let div = createElement('div')
append(div, [p1, p2])

const parent = list.parentElement
parent.append(div)



function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''
    return tag
}

function append(parent, children) {
    children.forEach((child) => parent.appendChild(child))
}