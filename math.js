// learning Math functions


let number = 14.554864
console.log(Math.round(number));
// output the nearest integer

console.log(Math.ceil(number));
// nearest upper integerer

console.log(Math.floor(number));
// nearest lower integer


// finding max and min 
console.log(Math.max(41, 52, 61, 24, 47), Math.min(41, 52, 61, 24, 47));


// from an array
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

let array = [41, 52, 61, 24, 47]
let max = getMaxOfArray(array)
console.log(max);
let min = getMinOfArray(array)
console.log(min);


// finding absolute value
const a = 20 - 50
console.log(Math.abs(a));