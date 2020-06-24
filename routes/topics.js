const express = require("express");
const router = express.Router();



router.get("/topics", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
