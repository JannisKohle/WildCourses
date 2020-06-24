const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/courses", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/users", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
