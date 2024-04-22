const friendsAge = [26, 20, 42, 65, 45, 21, 54, 65, 98, 67];

const portion = friendsAge.slice(3, 6);
console.log(portion);

// [26, 20, 42,   | 65, 45, 21,|   54, 65, 98, 67];
// It works like copy the array from right side of position 3 to right side of position 6
// and the original array remains the same

