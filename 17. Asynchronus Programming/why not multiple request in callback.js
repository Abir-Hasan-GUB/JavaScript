// const xhr = new XMLHttpRequest()
const BASE_URL = 'https://jsonplaceholder.typicode.com'

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let response = JSON.parse(xhr.response)
                callback(null, response)
            }else{
                callback(xhr.status, null)
            }
        }
    }
    xhr.send()
}

getRequest( `${BASE_URL}/posts/1`, (err, res) => {
    if(err){
        throw new Error('Error Occured !')
    }else{
        let {userId} = res
        getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
            if(err){
                throw new Error('Error Occured !')
            }else{
                getRequest(`${BASE_URL}/comments/${res.id}`, (err, res) =>{
                    if(err){
                        throw new Error('Error Occured !')
                    }else{
                        console.log(res)
                    }
                })
            }
        })
    }

})