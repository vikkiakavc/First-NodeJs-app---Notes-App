const fs = require('fs');
// const { get } = require('http');

function removeNotes(title){
    const notes = loadNotes();
    const remainingNotes = notes.filter(function(obj){
        return obj.title !== title;
    })
    if (notes.length === remainingNotes.length){
        console.log('no note found');
    }else{
        saveNotes(remainingNotes);
        console.log('note removed');
    }

}

function readNote(title){
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) console.log(note.body);
    else console.log('no note exist with this title!')
}

function listNotes(){
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });

}

function addNotes(title, body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(obj){
        return obj.title === title;
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log("note added successfully");
    }else{
        console.log("note already exist!")
    }

    
}

function loadNotes(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);    
    }catch(e){
        return [];
    }
    
}

function saveNotes(list){
    fs.writeFileSync('notes.json', JSON.stringify(list));
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}