const yargs = require("yargs")
const notes = require("./notes.js")

yargs.command({
    command: 'ekle',
    describe: 'yeni not ekler',
    builder:{
        title:{
            describe: 'Not Ekle',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'gövde',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'notları siler',
    builder:{
        title:{
            describe: 'Not Sil',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        notes.deleteNote(argv.title)
        
    }
})

console.log(yargs.argv)