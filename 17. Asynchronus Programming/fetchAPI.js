const BASE_URL = 'https://jsonplaceholder.typicode.com'

fetch (`${BASE_URL}/users/1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return Promise.resolve('Somthings...')
    })

    .then(str => {
        console.log(str) // print somthing here
        return Promise.resolve('Another Promise...')
    })

    .then(anotherPromise => {
        console.log(anotherPromise) // print another promise here
    })

    .catch(err => {
        console.log(err)
    })