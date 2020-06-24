const express = require("express");
const router = express.Router();



app.get("/recommendations", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/recommendations/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/recommendations/users", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

module.exports = router;
