// Dependencies
const db = require('../db/db.json');
const fs = require("fs");
// Used to give each new note a unique id when it's saved
const uuidv1 = require("uuidv1");

// Routing
// API GET request to retrieve data from the database
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
    res.json(db);
    })
};

// API POST request to create and add new notes
module.exports = (app) => {
    app.post("/api/notes", (req, res) => {
        res.json(true);
    })
};

// API DELETE rquest to delete notes
module.exports = (app) => {
    app.delete("api/notes/:id", (req, res) => {
        const noteId = req.params.id;

        for(var i = 0; i <db.length; i++){
            if(db[i].id === noteId) {
                let objIndex = db.indexOf(db);
                db.splice(objIndex, 1);
            }
            res.send(db);
        }
    });
};
