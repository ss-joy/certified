const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student-controller");

// router.get("/api/profile/:id", studentController.getStudentProfile);
router.post(
  "/api/student/enter-new-student",
  studentController.enterNewStudent
);
router.post("/api/save-certificate", studentController.saveCertificate);
router.get("/api/get-certificate", studentController.getCerti);
router.get("/api/student/profile", studentController.getStudentProfile);
module.exports = router;
