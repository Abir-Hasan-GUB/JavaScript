// *** All method are applicable only for assending order array elements

var arr = [1, 2, 3, 4, 5, 6, 7];

for(var i = 0; i < (arr.length / 2); i++){
  var temp = arr[i]
  arr[i] = arr[arr.length - 1 - i] // put last element in first index
  arr[arr.length - 1 - i] = temp // put firs element in last index
}

console.log(arr)

// build in method to revers a array
console.log(arr.reverse())