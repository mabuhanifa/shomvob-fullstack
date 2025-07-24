const Job = require("../models/Job");
const Application = require("../models/Application");

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get single job by ID
// @route   GET /api/jobs/:id
// @access  Public
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "applicants",
      "name email resume"
    );
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create a job
// @route   POST /api/jobs
// @access  Private (Admin)
const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      description,
      fullDescription,
      jobType,
      workType,
      salary,
    } = req.body;

    const job = new Job({
      title,
      company,
      location,
      description,
      fullDescription,
      jobType,
      workType,
      salary,
    });

    const createdJob = await job.save();
    res.status(201).json(createdJob);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Update a job
// @route   PUT /api/jobs/:id
// @access  Private (Admin)
const updateJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      description,
      fullDescription,
      jobType,
      workType,
      salary,
    } = req.body;

    const job = await Job.findById(req.params.id);

    if (job) {
      job.title = title || job.title;
      job.company = company || job.company;
      job.location = location || job.location;
      job.description = description || job.description;
      job.fullDescription = fullDescription || job.fullDescription;
      job.jobType = jobType || job.jobType;
      job.workType = workType || job.workType;
      job.salary = salary;

      const updatedJob = await job.save();
      res.json(updatedJob);
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Private (Admin)
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (job) {
      await Application.deleteMany({ jobId: job._id });
      await job.deleteOne();
      res.json({ message: "Job removed" });
    } else {
      res.status(404).json({ message: "Job not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
