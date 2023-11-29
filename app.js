const yargs = require('yargs');
const notes = require('./notes.js')


yargs.command({
    command: 'remove',
    describe: 'Removing',
    builder : {
        title: {
            describe: "removing note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'add',
    describe: 'adding a note',
    builder: {
        title:{
            describe: 'adding note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'read',
    describe: 'reading',
    builder : {
        title: {
            describe: "reading a note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});
// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();