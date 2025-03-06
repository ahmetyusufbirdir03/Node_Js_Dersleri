const yargs = require("yargs")

yargs.command({
    command: 'ekle',
    describe: 'yeni not ekler',
    builder:{
        title:{
            describe: 'Başlık1',
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
        console.log(argv.title)
        console.log(argv.body)
    }
})

yargs.command({
    command: 'listele',
    describe: 'notları listeler',
    builder:{
        title:{
            describe: 'Başlık2',
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
        console.log(argv.title)
        console.log(argv.body)
    }
})

yargs.command({
    command: 'sil',
    describe: 'bir notu siler',
    builder:{
        title:{
            describe: 'Başlık3',
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
        console.log(argv.title)
        console.log(argv.body)
    }
})

yargs.command({
    command: 'oku',
    describe: 'bir not okur',
    builder:{
        title:{
            describe: 'Başlık4',
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
        console.log(argv.title)
        console.log(argv.body)
    }
})

console.log(yargs.argv)