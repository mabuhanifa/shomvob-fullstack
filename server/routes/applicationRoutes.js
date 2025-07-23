const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplicationsByJobId,
  deleteApplication,
} = require("../controllers/applicationController");

router.route("/").post(createApplication);
router.route("/job/:jobId").get(getApplicationsByJobId);
router.route("/:id").delete(deleteApplication);

module.exports = router;
