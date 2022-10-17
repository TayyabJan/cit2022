const fs = require('fs');

class Notes {
    ReadFile() {
        const notes = fs.readFileSync('Notes.json');
        const data = JSON.parse(notes.toString());
        return data;
    }
    SearchNote(id) {

        let data = this.ReadFile();
        return data = data.filter(n => n.id == id);
    }
    DeleteNote(id) {

        let data = this.ReadFile();
        data = data.filter(n => n.id != id);
        this.writeFile(data);
    }
    writeFile(data) {
        fs.writeFileSync('Notes.json', JSON.stringify(data), (err, data) => {
            if (err) return;
            console.log("data saved");
        })
    }
    insertNote(id, Title) {

        const NoteObject = {

            id,
            Title
        }
        let data = this.ReadFile();
        data.push(NoteObject);
        this.writeFile(data);
        //console.log(data);
        // fs.writeFileSync('Notes.json', JSON.stringify(data), (err, data) => {
        //     if (err) return;
        //     console.log("data Inserted");
        // });
        //fs.appendFileSync('Notes.json',JSON.stringify(NoteObject),(err,data)=>{
        //     if(err) return;
        //     console.log("Record Inserted Successfully");
        // })
    }
    updateNotes(id, Title) {
        let data = this.ReadFile();
        data = data.map(n => {
            if (n.id == id) {
                n.Title = Title;
            }
            return n;
        });
        this.writeFile(data);
        // fs.writeFileSync('Notes.json', JSON.stringify(data), (err, data) => {
        //     if (err) return;
        //     console.log("data Updated");
        // });
    }

}
module.exports = Notes;