// Dependencies
// We need to include the path package to get the correct file path for our html
const path = require("path");

// Routing
// GET request to return the notes.html file
module.exports = (app) => {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })
};

// GET Request to return the index.html file
module.exports = (app) => {
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        })
};


