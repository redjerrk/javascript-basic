var ageValue = [121, 25, 56, 50, 54, 56, 30]


console.log(ageValue.indexOf(56))
console.log(ageValue[4])

// add value to the last position of the array
ageValue.push(87)

console.log(ageValue)

// use pop to remove the last element of the array
ageValue.pop()

console.log(ageValue)


// assign the deleted value from the array to the variable
var deletedValue = ageValue.pop()

console.log(deletedValue)
console.log(ageValue)

// splice is used to insert array elements in a certain position of the array
ageValue.splice(1, 0, 133)

console.log(ageValue)