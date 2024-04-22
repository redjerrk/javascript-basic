let firstNumber = 11
let secondNumber = 13
console.log(firstNumber, secondNumber);


// traditional approach which is very common
// let temp = firstNumber
// firstNumber = secondNumber
// secondNumber = temp
// console.log(firstNumber, secondNumber);



// Destructuring Approach (without temp variable)
[firstNumber, secondNumber] = [secondNumber, firstNumber]
console.log(firstNumber, secondNumber);
