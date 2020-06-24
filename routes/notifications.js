const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
