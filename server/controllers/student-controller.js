const jwt = require("jsonwebtoken");
const AllStudents = require("../models/all-students");
// function getStudentProfile(req, res) {
//   try {
//     const { authorization } = req.headers;
//     const token = authorization.split(" ")[1];
//     const decoded = jwt.verify(token, "superdupersecret");
//     const { userEmail, userId } = decoded;
//     console.log(decoded);
//     res.json({
//       msg: "lol",
//     });
//   } catch (err) {
//     res.json({
//       msg: "you are not logged in to view the profile page",
//     });
//     console.log(err);
//   }
// }
async function enterNewStudent(req, res, next) {
  try {
    const { enteredRegNo } = req.body;
    const studentFound = await AllStudents.findOne({ reg: enteredRegNo });
    if (studentFound) {
      return res.send({
        msg: `This student with registration number ${enteredRegNo} is already registered`,
      });
    }
    const student = new AllStudents({
      reg: enteredRegNo,
    });
    const rsp = await student.save({ validationBeforeSave: true });
    res.send({
      msg: `Student with a registration number of ${rsp.reg} has been registred!`,
    });
  } catch (err) {
    next(err);
  }
}
module.exports = {
  enterNewStudent: enterNewStudent,
  // getStudentProfile: getStudentProfile
};
