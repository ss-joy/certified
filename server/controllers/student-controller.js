const Student = require("../models/student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function signupStudent(req, res) {
  const { reg, email, password } = req.body;
  const userExists = await Student.find({ email: email });
  if (userExists.length != 0) {
    return res.json({
      msg: "This email is already registered",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const student = new Student({
    email,
    reg,
    password: hash,
  });
  student
    .save()
    .then(() => {
      return res.status(200).json({
        msg: "You have successfully signed up",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "something went wrong on the server",
      });
    });
}
async function loginStudent(req, res) {
  const { email, password } = req.body;
  const studentFound = await Student.findOne({ email: email });

  if (!studentFound) {
    return res.json({
      msg: "Couldnt find your email.Please sign up first to log in",
    });
  }
  const ans = await bcrypt.compare(password, studentFound.password);
  if (ans) {
    return res.json({
      msg: "Authentication failed",
    });
  }
  jwtToken = jwt.sign(
    {
      userEmail: studentFound.email,
      userId: studentFound.id,
    },
    "superdupersecret",
    {
      expiresIn: "1h",
    }
  );
  //login ok
  res.json({
    userId: studentFound.id,
    email: studentFound.email,
    token: jwtToken,
  });
}

module.exports = { signupStudent, loginStudent };
