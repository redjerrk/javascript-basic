
function bestFriend(nameList){
    let length = 0, longName;
    for (let index = 0; index < nameList.length; index++) {
        const element = nameList[index];
        if(element.length >= length){
            length = element.length;
            longName = element;
        }


        
    }
    return longName
}

const nameList = ['rakibul islam', 'shamim al mamaun', 'jubayer ahmed', 'shalman bin rashid ibne halim', 'kutub uddin ahmed', 'tarikul islam batpar'];


const longName = bestFriend(nameList);

console.log(longName);
