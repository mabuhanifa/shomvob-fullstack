require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");

connectDB();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://shomvob-fullstack.vercel.app"],
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

const jobRoutes = require("../routes/jobRoutes");
const applicationRoutes = require("../routes/applicationRoutes");
const userRoutes = require("../routes/userRoutes");
const authRoutes = require("../routes/authRoutes");

app.get("/", (req, res) => {
  res.send("Job Board API is running");
});

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const { notFound, errorHandler } = require("../middleware/errorMiddleware");

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
