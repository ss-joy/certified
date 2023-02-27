const Student = require("../models/student");
const Admin = require("../models/admin");
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
        userEmail: admins[j].email,
        userId: admins[j].id,
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
  //normal validation
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
  res.status(200).json({
    userId: studentFound.id,
    email: studentFound.email,
    token: jwtToken,
    expiresIn: "1",
  });
}

function sendProfile(req, res) {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, "superdupersecret");
    const { userEmail, userId } = decoded;
    console.log(decoded);
    res.json({
      msg: "lol",
    });
  } catch (err) {
    res.json({
      msg: "you are not logged in to view the profile page",
    });
    console.log(err);
  }
}

module.exports = { signupStudent, loginStudent, sendProfile };
