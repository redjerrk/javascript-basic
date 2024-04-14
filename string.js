let personName = 'Abdur Rahman Shahin';

let anotherPerson = 'Shahin Siddique'


// console.log(personName.length);
// console.log(personName[0]);


console.log(personName);


personName += anotherPerson

console.log(personName);


// string lowercase and uppercase conversion
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());


// search inside the string 

let song = "the quick brown fox ran over the lazy dog"
console.log(song.includes('elephant'));

let part = 'ran'
console.log(song.includes(part));
// here includes function returns a binary value and takes string as a parameter


// finding the index of a part inside the string
// the output will return -1 if not included otherwise returns 0 or positive value

console.log(song.indexOf('lazy'));
console.log(song.indexOf('lazzzy'));


// checking string with startsWith and endsWith  --------- maybe returns value as a boolean

const fileName = 'myfile.pdf'
const fileNameTwo = 'myfile.png'

console.log(fileName.endsWith('.pdf'));
console.log(fileNameTwo.endsWith('.pdf'));

// will learn another module tomorrow