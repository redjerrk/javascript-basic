let resultArray = [];
let splitArray = myName.split(' ')
for(let i = splitArray.length - 1; i>=0; i--){
     resultArray.push(splitArray[i]);

}
reverseName = resultArray.join(" ")
console.log(reverseName);