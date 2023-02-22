const Student = require("../models/student");
const bcrypt = require("bcrypt");
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
  const studentFound = await Student.find({ email: email });

  if (studentFound.length === 0) {
    return res.status({
      msg: "Couldnt find your email",
    });
  }
  const ans = await bcrypt.compare(password, studentFound[0].password);
  if (ans) {
    return res.json({
      msg: "password wrong",
    });
  }
  req.session.student = {
    id: studentFound[0].id,
  };
  req.session.save(() => {
    res.send("ok");
  });
}

module.exports = { signupStudent, loginStudent };
