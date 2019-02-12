console.log("starting app")
// files required from node

const _ = require('lodash')
const yargs = require('yargs')
// files required locally
const notes = require('./notes')

const argv = yargs.argv
const command = argv._[0]
console.log("command", command)

if (command === "add") {
    const note = notes.addNote(argv.title, argv.body)
    notes.logNote(note)
} else if (command === "list") {
    const allNotes = notes.getAll()
    console.log(`${allNotes.length} note(s)`)
    allNotes.forEach(note => notes.logNote(note))
} else if (command === "read") {
    const note = notes.readingNote(argv.title)
    notes.logNote(note)
} else if (command === "remove") {
    const notesRemoved = notes.removeNote(argv.title)
    const message = !notesRemoved ? "Note Removed" : "Note Not Found"
    console.log(message)
} else {
    console.log("command not recognised")
} 