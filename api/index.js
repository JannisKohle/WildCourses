const express = require("express");
const app = express();
app.use(express.json());
// const port = process.env.PORT;

// Example:
app.get("/test", (req, res) => {
    res.send({"your message": req.query.msg});
});





app.get("/recommendations", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/recommendations/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/recommendations/users", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/notifications", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.listen(3000);
