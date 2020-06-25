const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.put("/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
