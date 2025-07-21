const Application = require("../models/Application");

// @desc    Create new application
// @route   POST /api/applications
// @access  Public
const createApplication = async (req, res) => {
  try {
    const { jobId, name, email, resume } = req.body;

    const application = new Application({
      jobId,
      name,
      email,
      resume,
    });

    const createdApplication = await application.save();
    res.status(201).json(createdApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createApplication,
};
