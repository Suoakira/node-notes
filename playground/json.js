// const obj = {
//     name: "andrew"
// }

// const stringObj = JSON.stringify(obj)
// console.log(obj)
// console.log(stringObj)

// const personString = '{"name":"Andrew","age":"25"}'

// const person = JSON.parse(personString)
// console.log(person)

const fs = require('fs')
const originalNote = {
    title: "Some Title",
    body: "Some Body"
}
// file you want to attach, and what you want to attach

// original note string
const originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync("notes.json", originalNoteString)

const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)



console.log(typeof(note))
console.log(note.title)
