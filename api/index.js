const express = require("express");
const app = express();
app.use(express.json());
// const port = process.env.PORT;

// Example:
app.get("/test", (req, res) => {
    res.send({"your message": req.query.msg});
});



app.get("/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.put("/courses/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId/sections", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.put("/courses/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId/sections/:sectionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId/sections/:sectionId/lessons", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.put("/courses/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId/sections/:sectionId/lessons/:lessonId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId/forum", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/courses/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/courses/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/courses/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.put("/courses/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/courses/:courseId/forum/:questionId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

///////////////////

app.get("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.put("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/accounts/:accountId", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

///////////////////

app.get("/topics", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

///////////////////

app.get("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.delete("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.post("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});
app.patch("/topics/:topic/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

///////////////////

app.get("/recommendations", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/recommendations/courses", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.get("/recommendations/users", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

///////////////////

app.get("/notifications", (req, res) => {
    res.send({"message": "very good response", "your id": req.query.userId, "your password": req.query.pw});
});

app.listen(3000);
