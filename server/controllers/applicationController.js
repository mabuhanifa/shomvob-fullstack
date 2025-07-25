const Application = require("../models/Application");
const Job = require("../models/Job");

// @desc    Create new application
// @route   POST /api/applications
// @access  Public
const createApplication = async (req, res) => {
  try {
    const { jobId, name, email, resume } = req.body;

    if (!jobId || !name || !email || !resume) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found." });
    }

    const existingApplication = await Application.findOne({ jobId, email });
    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job." });
    }

    const application = new Application({
      jobId,
      name,
      email,
      resume,
    });

    const createdApplication = await application.save();

    job.applicants.push(createdApplication._id);
    await job.save();

    res.status(201).json(createdApplication);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get all applications for a job
// @route   GET /api/applications/job/:jobId
// @access  Private (Admin)
const getApplicationsByJobId = async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Delete an application
// @route   DELETE /api/applications/:id
// @access  Private (Admin)
const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      await Job.updateOne(
        { _id: application.jobId },
        { $pull: { applicants: application._id } }
      );

      await application.deleteOne();
      res.json({ message: "Application removed" });
    } else {
      res.status(404).json({ message: "Application not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createApplication,
  getApplicationsByJobId,
  deleteApplication,
};
