const list = document.getElementById('list')
let firstChild = list.firstElementChild

firstChild.style.backgroundColor = 'red'
firstChild.style.fontSize = '8rem'

let styleObject = {
    background: 'black',
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#fff'
};

// Object.assign(list.style, styleObject)
[...list.children].forEach(li => Object.assign(li.style, styleObject))