const Student = require("../models/student");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const allStdents = require("../models/all-students");

async function signupUser(req, res) {
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
    image: req.file.path,
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
async function loginUser(req, res) {
  const { email, password } = req.body;
  const adminFound = await Admin.find();
  const admins = adminFound;
  let isAdmin = false;
  let j;
  for (let i = 0; i < adminFound.length; i++) {
    if (admins[i].email === email && admins[i].password === password) {
      j = i;
      isAdmin = true;
      break;
    }
  }
  if (isAdmin) {
    jwtToken = jwt.sign(
      {
        adminId: admins[j].id,
      },
      "superdupersecret",
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      isAdmin: isAdmin,
      userId: admins[j].id,
      email: admins[j].email,
      token: jwtToken,

      expiresIn: "1",
    });
  }
  //////
  //////
  //student validation
  const studentFound = await Student.findOne({ email: email });
  if (!studentFound) {
    return res.status(404).json({
      msg: "Couldnt find your email.Please sign up first to log in",
    });
  }
  const ans = await bcrypt.compare(password, studentFound.password);
  if (!ans) {
    return res.status(404).json({
      msg: "Authentication failed",
    });
  }
  // const studentMailFound = await allStdents.findOne({ mail: email });
  // console.log(studentMailFound);
  // console.log(studentMailFound.reg);

  jwtToken = jwt.sign(
    {
      userEmail: studentFound.email,
      userId: studentFound.id,
      reg: studentFound.reg,
    },
    "superdupersecret",
    {
      expiresIn: "1h",
    }
  );
  //login ok
  res.status(200).json({
    image: studentFound.image,
    userId: studentFound.id,
    email: studentFound.email,
    token: jwtToken,
    expiresIn: "1",
  });
}
module.exports = { signupUser, loginUser };
