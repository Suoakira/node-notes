console.log("starting notes.js")
const fs = require('fs')

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => fs.writeFileSync("notes-data.json", JSON.stringify(notes))

const addNote = (title, body) => {
    let notes = fetchNotes()
    let note = {
        title: title,
        body: body
    }

    // no need for a dunction here
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0 ) {
        notes.push(note)
        saveNotes(notes)
        return note
    } 
}

const getAll = () => {
    console.log("getting all notes")
}

const readingNote = (title) => {
    const allNotes = fetchNotes()
    console.log(allNotes)
    const filteredNotes = allNotes.filter((note) => note.title === title)
    return filteredNotes[0]
     // implicitly returns undefined
}

const removeNote = (title) => {
    let notes = fetchNotes()
    console.log(notes)
    const filterNotes = notes.filter((note) => note.title !== title)
    saveNotes(filterNotes)
    const bootLean = notes.length !== filterNotes.length ? true : false
    return bootLean
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readingNote: readingNote,
    removeNote: removeNote
}