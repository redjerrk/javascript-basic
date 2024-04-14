const lyrics = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"

var splitOne = lyrics.split(' ')

var splitTwo = lyrics.split('.')

var charactersplit = lyrics.split('')
console.log(splitOne);

console.log(splitTwo);
console.log(charactersplit);


// SPLICE PART

const stringOne = 'hello there are you listening'

console.log(stringOne.slice(3, 8));

console.log(stringOne.substring(3, 8));

// joint a string from an array 

const lines = ['tumi bondhu', 'kala pakhi', 'ami jeno ki', 'boshonto bashate bondhu', 'bhulte paro ni'];

const newSong = lines.join(', ')

console.log(newSong);