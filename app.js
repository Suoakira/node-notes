console.log("starting app")
// files required from node
const fileSystem = require("fs")
const _ = require('lodash')
const yargs = require('yargs')
// files required locally
const notes = require('./notes')

const argv = yargs.argv
const command = argv._[0]
console.log("command", command)

if (command === "add") {
    const note = notes.addNote(argv.title, argv.body)
    if (note !== undefined) {
        console.log("note created", note.title) 
    } else {
        console.log("not is a duplicate")
    }
} else if (command === "list") {
    notes.getAll()
} else if (command === "read") {
    notes.readingNote(argv.title)
} else if (command === "remove") {
    const notesRemoved = notes.removeNote(argv.title)
    const message = !notesRemoved ? "Note Removed" : "Note Not Found"
    console.log(message)
} else {
    console.log("command not recognised")
} 