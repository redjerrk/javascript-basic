const myName = "My name is the Musa'al'Gaib"
let j = 0;
let reverseName = '';

// for(let i = myName.length - 1; i>=0; i--){
//      reverseName += myName[i];

// }
// console.log(reverseName);
// 

let resultArray = [];
let splitArray = myName.split(' ')
for(let i = splitArray.length - 1; i>=0; i--){
     resultArray.push(splitArray[i]);

}
reverseName = resultArray.join(" ")
console.log(reverseName);
