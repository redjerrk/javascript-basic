var shopping = {
    shirt: 5,
    pant: 6,
    shoe: 4,
    sunglass: 3,
    bracelet: 4,
    perfume: 3
}

// Hard way using for loop
var keys = Object.keys(shopping)

for(var i =0; i<keys.length; i++){
    var propertyName = keys[i]
    var propertyValue = shopping[propertyName]
    console.log(propertyName, propertyValue)
}

console.log(" line breeak")

// easy using for in loop


for(var propertyName in shopping){
    var propertyValue = shopping[propertyName]
    console.log(propertyName, propertyValue)
}