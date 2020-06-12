const express = require("express");
const app = express();
app.use(express.json());
// const port = process.env.PORT;

// Example:
app.get("/:mes", (req, res) => {
    res.send(req.params.mes);
});



app.get("/accounts/:account-name", (req, res) => {
    res.send({"message": "very good response"});
});

app.get("/topics", (req, res) => {
    res.send({"message": "very good response"});
});

app.get("/topics/:topic-name/courses", (req, res) => {
    res.send({"message": "very good response"});
});

app.get("/recommendations/:uname/:pw", (req, res) => {
    res.send({"message": "very good response"});
});

app.get("/recommendations/:uname/:pw/courses", (req, res) => {
    res.send({"message": "very good response"});
});

app.get("/recommendations/:uname/:pw/users", (req, res) => {
    res.send({"message": "very good response"});
});

app.get("/notifications/:uname/:pw", (req, res) => {
    res.send({"message": "very good response"});
});

app.listen(3000);
