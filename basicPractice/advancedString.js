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

// using trim function

let greetings = '         hello world       '

console.log(greetings.trim());
console.log(greetings);

// well formatted
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
