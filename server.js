//Dependencies
const express = require("express");

// Express Configuration
// Tells node that we are creating an "Express" server
const app = express();

// Sets an initial port for our server
const PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded ({extended: true}));
app.use(express.json());

// // Router
// // This points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
// This code "starts" our server.
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
