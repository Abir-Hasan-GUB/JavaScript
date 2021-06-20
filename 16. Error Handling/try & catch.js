function makeWords(text){
    try{
        let string = text.trim() // remove empty space from string
        let words = string.split(' ') // split words by spaces
    
        return words
    }catch(e){
        // console.log(e.message)
        console.log('Please provide a valid text ...')
    }finally{
        console.log('Thanks for using this site.')
    }

}

let words = makeWords('My name is Abir Hasan !')
console.log(words)