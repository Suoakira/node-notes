console.log("starting app")
// files required from node

const _ = require('lodash')
const yargs = require('yargs')
// files required locally
const notes = require('./notes')

const optionsTitle = {
    describe: "Title of note",
    demand: true, // you have to provide title when calling .command tag
    alias: "t" // alias version t
}

const optionsBody =  {
    describe: "Please add a body",
    demand: true,
    alias: "e"
    }

const argv = yargs
        .command("add", "Add a new note", {
            title: optionsTitle,
            body: optionsBody
        })
        .command("list", "List all notes")
        .command("read", "Read a Note", {
            title: optionsTitle
        })
        .command("remove", "Remove an Item", {
            title: optionsTitle,
        })
        .help() // can run with the --help flag to get more information
        .argv
const command = argv._[0]
console.log("command", command)

if (command === "add") {
    const note = notes.addNote(argv.title, argv.body)
    notes.logNote(note)
} else if (command === "list") {
    const allNotes = notes.getAll()
    allNotes.forEach(note => notes.logNote(note))
} else if (command === "read") {
    const note = notes.readingNote(argv.title)
    notes.logNote(note)
} else if (command === "remove") {
    const notesRemoved = notes.removeNote(argv.title)
    const message = !notesRemoved ? "Note Removed" : "Note Not Found"
} else {
    console.log("command not recognised")
} 