const BASE_URL = 'https://jsonplaceholder.typicode.com'

function customFetchAPI(url) {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
    
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    let response = JSON.parse(xhr.response)
                    resolve(response)
                }else{
                    reject(new Error('Error Occured !' + ' Code: '+ xhr.status))
                }
            }
        }
        xhr.send()
    })
}

customFetchAPI(`${BASE_URL}/users/1`)
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err.message)
})