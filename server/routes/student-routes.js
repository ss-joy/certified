const express = require("express");
const router = express.Router();

const studentController= require('../controllers/student-controllers')
router.get('/api/login',studentController.loginStudent)
router.post('/api/signup',studentController.signupStudent)
router.get('/api/signup')
module.exports = router;
