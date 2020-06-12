const express = require("express");
const app = express();
app.use(express.json());
// const port = process.env.PORT;

app.get("/:mes", (req, res) => {
    res.send(req.params.mes)
});

app.listen(3000);
