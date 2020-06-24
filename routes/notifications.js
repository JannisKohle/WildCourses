const express = require("express");
const router = express.Router();



app.get("/notifications", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

module.exports = router;
