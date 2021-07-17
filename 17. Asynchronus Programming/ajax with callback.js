const xhr = new XMLHttpRequest()
const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

xhr.open('GET', BASE_URL)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200){
            console.log(xhr.response)
        }else{
            console.log('Error Code: ' + xhr.status)
        }
    }
    
}
xhr.send()
