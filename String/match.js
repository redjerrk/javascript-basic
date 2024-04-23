function matchFinder(firstString, secondString){
    if (firstString.includes(secondString)){
        return true;
    }
    else
        return false;
}

let check = matchFinder("Peter Parker", "Pak");
console.log(check);

check = matchFinder("Peter Parker", "ker");
console.log(check);