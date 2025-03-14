const fs = require("fs")
const chalk = require("chalk")

const addNote = function(title,body){
    const notes = loadNotes()
    const duplicates = notes.filter(function(notes){
        return notes.title === title
    })
    if(duplicates.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Note eklendi"))
    }else{
        console.log(chalk.bgRed("Bu başlıklı bir note zaten mevcut!"))
    }
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const deleteNote = function(title){
    const notes = loadNotes()
    const filteredNotes = notes.filter(function(notes){
        return notes.title !== title
    })
    if(filteredNotes.length === notes.length){
        console.log(chalk.bgRed("Böyle bir note yok"))
    }else{
        console.log(chalk.bgGreen("note silindi"))
        saveNotes(filteredNotes)
    }
}

module.exports = {
    addNote : addNote,
    deleteNote: deleteNote
}