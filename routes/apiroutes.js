// Dependencies
const fs = require("fs");
const db = require("../db/db.json")
// Used to give each new note a unique id when it's saved
const { v4: uuidv4 } = require('uuid');

// Routing
module.exports = (app) => {

// API GET request to retrieve data from the database
    app.get("/api/notes", (req, res) => {
        res.send(db);
    });

// API POST request to create and add new notes
    app.post("/api/notes", (req, res) => {
        var newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text

        };
        db.push(newNote);
        res.send(newNote);
    });
// API DELETE rquest to delete notes
    app.delete("/api/notes/:id", (req, res) => {
        
        var noteID = req.params.id

        for (var i = 0; i < db.length; i++) {
            if(db[i].id === noteID) {
                let objIndex = db.indexOf(db);
                db.splice(objIndex,1);
            }
        res.send(db);
    }
});
};
