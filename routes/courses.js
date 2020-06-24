const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId", (req, res) => {
    res.send({"message": "very good response"});
});
router.put("/:courseId", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId/sections", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.put("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response"});
});
router.put("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId/forum", (req, res) => {
    res.send({"message": "very good response"});
});

router.get("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.post("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.delete("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.put("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response"});
});
router.patch("/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response"});
});


module.exports = router;
