let load = document.getElementById('load')
let postList = document.getElementById('posts')

let baseUrl = 'https://jsonplaceholder.typicode.com/posts'

load.addEventListener('click', function (){
    fetch(baseUrl)
    .then(response => response.json())
    .then(posts => {
        posts.forEach((post, index) => {
            let listItem = listItemGenarator(post, index+1)
            postList.appendChild(listItem)
        })
    })
    .catch(err => console.log(err))

})

function listItemGenarator(item, index) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${index}. ${item.title}`

    return li
}
