const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student-controller");
router.post("/api/login", studentController.loginStudent);
router.post("/api/signup", studentController.signupStudent);
router.get("/api/profile/:id", studentController.sendProfile);
module.exports = router;
