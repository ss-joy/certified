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
    const studentAlreadyExists = await AllStudents.findOne({
      reg: enteredRegNo,
    });
    if (studentAlreadyExists) {
      return res.json({
        msg: "student already exists",
      });
    }
    const Student = new AllStudents({
      reg: enteredRegNo,
    });
    const response = await Student.save({
      // vali
    });
    return res.status(200).json({
      msg: `You successfully added a student with ${response.reg} registration number`,
    });
  } catch (e) {
    next(e);
  }
}
module.exports = {
  enterNewStudent: enterNewStudent,
  // getStudentProfile: getStudentProfile
};
