const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:topic/courses", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
