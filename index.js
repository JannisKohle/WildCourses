const express = require("express");
const app = express();

const coursesRoutes = require("./routes/courses");
const accountsRoutes = require("./routes/accounts");
const topicsRoutes = require("./routes/topics");
const recommendationsRoutes = require("./routes/recommendations");
const notificationsRoutes = require("./routes/notifications");

app.use(express.json());

app.use("/courses", coursesRoutes);
app.use("/accounts", accountsRoutes);
app.use("/topics", topicsRoutes);
app.use("/recommendations", recommendationsRoutes);
app.use("/notifications", notificationsRoutes);



app.listen(3000);
