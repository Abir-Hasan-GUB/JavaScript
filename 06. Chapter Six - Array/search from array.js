var arr = [1, 2, 3, 4, 5, 6, 7];

var find = 6;
var isFounded = false;

for(var i = 0; i < arr.length; i++){
    if(arr[i] == find){
        console.log("Item found at index: " + arr[i])
        isFounded = true
        break
    }
}

if(!isFounded){
    console.log("Item not found")
}