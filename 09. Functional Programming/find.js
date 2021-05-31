var array = [1, 2, 3, 4]
var obj = [
    {
        id: 1,
        name: 'Abir Hasan',
        UV: 'Green University of Bangladesh',
        phone: '01774062312',
        maritalStatus: 'Unmarid'
    }, 
    {
        id: 2,
        name: 'Nahid Hasan',
        UV: 'Khaja Unus Ali Medical College',
        phone: '01789108251',
        maritalStatus: 'Unmarid'
    }, 
]

var findedValue = array.find(function(value){
    return value === 2
})

var findObject = obj.find(function(value){
    return value.id == 1
})

console.log(findedValue)
console.log(findObject)