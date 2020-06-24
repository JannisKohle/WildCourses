const express = require("express");
const router = express.Router();



router.get("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.put("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

module.exports = router;
