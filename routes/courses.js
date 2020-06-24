const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.put("/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.put("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.put("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

router.get("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.post("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.delete("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.put("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
router.patch("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});


module.exports = router;
