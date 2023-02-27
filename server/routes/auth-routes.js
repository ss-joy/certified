const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
router.post("/api/login", authController.loginUser);
router.post("/api/signup", authController.signupUser);
module.exports = router;
