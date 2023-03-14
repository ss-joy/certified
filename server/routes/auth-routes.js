const express = require("express");
const router = express.Router();
const multer = require("multer");
const storageonf = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log("from--->");
    console.log(req.body);
    cb(
      null,
      req.body.email +
        "_" +
        req.body.reg +
        "_" +
        Date.now() +
        "-" +
        file.originalname
    );
  },
});
const upload = multer({ storage: storageonf });
const authController = require("../controllers/auth-controller");
router.post("/api/login", authController.loginUser);
router.post("/api/signup", upload.single("images"), authController.signupUser);
module.exports = router;
