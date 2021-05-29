var test = "This is Global Test"

function scope(){
    var test = "This is First Scope Test"
    if(true){
        var test = "This is Second Scope Test"
        if(true){
            var test = "This is Third Scope Test"
        }
    }
    console.log(test)
}

scope()