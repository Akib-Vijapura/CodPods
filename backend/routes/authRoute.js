const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.route("/otpsend").post(authController.sendOtp);
router.route("/otpverify").post(authController.verifyOtp);

module.exports = router;
