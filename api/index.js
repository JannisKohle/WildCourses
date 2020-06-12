const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    // do something
});

app.listen(port);
