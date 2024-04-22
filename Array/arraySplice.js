const friendsAge = [26, 20, 42, 65, 45, 21, 54, 65, 98, 67];

const portion = friendsAge.splice(3, 4);
console.log(portion);

// [26, 20, 42,   | 65, 45, 21,54,|   65, 98, 67];
// It works like  it will cut the array from index 3 to number of 4 number of elements 
// 

console.log(friendsAge);
// so the blanks spaces will be filled by the next elements


// we can also insert values 

const anotherArray = [20, 40, 30, 50]

const cutPortion = anotherArray.splice(1, 2, 999, 667, 787877)


console.log('\n', cutPortion);
console.log(anotherArray);

// Output 
// cutPortion = [ 40, 30 ]
// anotherArray = [ 20, |999, 667, 787877|, 50 ]
// so these are the new added elements inserted in the position of the removed elements 


// we can also insert values without removing any elements
// cutPortion = [ 40, 30 ]

cutPortion.splice(1, 0, 477, 655, 48, 78);
console.log(cutPortion);

// cutPortion = [ 40, 477, 655, 48, 78, 30 ]
// so now no elements is removed and the array becomes like this