var arr1 = [1, 2, 3, 4, 5, 6, 7]
var arr2 = []

//print all array elements
for(var i = 0; i < arr1.length; i++){
    arr2[i] = arr1[i]
}

console.log("Real Array: " + arr1)
console.log("Second Copyed Array: " + arr2)