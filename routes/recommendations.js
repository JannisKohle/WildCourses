const express = require("express");
const router = express.Router();



router.get("/recommendations", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/recommendations/courses", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/recommendations/users", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
