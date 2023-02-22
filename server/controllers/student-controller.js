const Student = require("../models/student");

async function signupStudent(req, res) {
  const { reg, email, password } = req.body;
  // const studentExists = await student.find({ email: enteredEmail });
  // console.log("huhu");
  // console.log(studentExists);
  // if (response) console.log(response);
  const student = new Student({
    email,
    reg,
    password,
  });
  student
    .save()
    .then(() => {
      return res.status(200).json({
        msg: "You have successfully logged in",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "something went wrong on the server",
      });
    });
}
function loginStudent(req, res) {
  // const{}=req.body
  //   console.log(req.body);
}

module.exports = { signupStudent, loginStudent };
