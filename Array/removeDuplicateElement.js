const studentName = ['abul', 'karim', 'fahim', 'rahim', 'ullas', 'karim', 'uzzal', 'fahim', 'ullas', 'shamim', 'ritul', 'ritul', 'uzzal', 'akhyar', 'fahim', 'habib', 'jeba', 'karim', 'abul'];


 function removeDuplicate(arrayName) {
    const uniqueArray = [];
    for(let i =0; i<arrayName.length; i++){
        if(uniqueArray.includes(arrayName[i]) === false){
            uniqueArray.push(arrayName[i])
        }


    }
    return uniqueArray
    
}

const uniqueArray = removeDuplicate(studentName)
console.log(uniqueArray.length);
