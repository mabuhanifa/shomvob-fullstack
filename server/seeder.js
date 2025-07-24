const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./data/users");
const jobs = require("./data/jobs");
const applicationsData = require("./data/applications");
const connectDB = require("./config/db");

const Application = require("./models/Application");
const Job = require("./models/Job");
const User = require("./models/User");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Application.deleteMany();
    await Job.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log("Users Imported!".green.inverse);

    const createdJobs = await Job.insertMany(jobs);
    console.log("Jobs Imported!".green.inverse);

    const sampleApplications = applicationsData.map((app) => {
      const randomJobIndex = Math.floor(Math.random() * createdJobs.length);
      return {
        ...app,
        jobId: createdJobs[randomJobIndex]._id,
      };
    });

    const createdApplications = await Application.insertMany(
      sampleApplications
    );
    console.log("Applications Imported!".green.inverse);

    for (const app of createdApplications) {
      await Job.findByIdAndUpdate(app.jobId, {
        $push: { applicants: app._id },
      });
    }
    console.log("Applications linked to Jobs!".green.inverse);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Application.deleteMany();
    await Job.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
