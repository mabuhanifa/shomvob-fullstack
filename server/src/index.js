require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const jobRoutes = require("../routes/jobRoutes");
const applicationRoutes = require("../routes/applicationRoutes");

app.get("/", (req, res) => {
  res.send("Job Board API is running");
});

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

const { notFound, errorHandler } = require("../middleware/errorMiddleware");

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
