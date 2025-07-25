const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/me").get(protect, getUserProfile);

module.exports = router;
