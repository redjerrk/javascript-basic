// syntax
// var objectName = {
//     objectProperties or keys, 
//     keyName: keyValue,
//     keyName: keyValue,
//     keyName: keyValue,
    
// }

var student = {
    id: 12,
    name: "Rakibul Islam",
    section: 'A',
    marks: 86
}

console.log(student.name)



// changing value of any property
student.marks = 96;
console.log(student.marks)

// alternative way
console.log(student['section'])

// another way using variable

var studentName = 'name'
console.log("getting student name here: ", student[studentName])



// accessing objects keys 
var gettingKeys = Object.keys(student)
console.log(gettingKeys)

// accessing objects with values
var gettingValues = Object.values(student)
console.log(gettingValues)




