const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJobById,
  createJob,
} = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAllJobs).post(protect, createJob);
router.route("/:id").get(getJobById);

module.exports = router;
