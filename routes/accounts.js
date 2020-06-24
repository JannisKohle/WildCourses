const express = require("express");
const router = express.Router();



router.get("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.put("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response"});
});

module.exports = router;
