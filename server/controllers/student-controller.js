const jwt = require("jsonwebtoken");
const AllStudents = require("../models/all-students");
const hscCertificate = require("../models/hsc-certificate");
const hsCrtificate = require("../models/hsc-certificate");
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
async function getCerti(req, res) {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];

  const decoded = jwt.verify(token, "superdupersecret");
  const { userEmail, userId, reg } = decoded;
  const resp = await hscCertificate.findOne({ reg });

  res.json({ resp });
}
async function enterNewStudent(req, res, next) {
  try {
    const { enteredRegNo, studentMail } = req.body;
    const studentFound = await AllStudents.findOne({ reg: enteredRegNo });
    if (studentFound) {
      return res.send({
        msg: `This student with registration number ${enteredRegNo} is already registered`,
      });
    }
    const student = new AllStudents({
      reg: enteredRegNo,
      mail: studentMail,
    });
    const rsp = await student.save({ validationBeforeSave: true });
    res.send({
      msg: `Student with a registration number of ${rsp.reg} has been registred!`,
    });
  } catch (err) {
    next(err);
  }
}
async function saveCertificate(req, res) {
  const {
    name,
    fName,
    mName,
    insName,
    center,
    reg,
    group,
    bangla,
    eng,
    ict,
    phy,
    chem,
    math,
    bio,
  } = req.body;
  // console.log(
  //   name,
  //   fName,
  //   mName,
  //   insName,
  //   center,
  //   reg,
  //   group,
  //   bangla,
  //   eng,
  //   ict,
  //   phy,
  //   chem,
  //   math,
  //   bio
  // );
  const Hsc = new hsCrtificate({
    name: name,
    father: fName,
    mother: mName,
    institution: insName,
    centre: center,
    reg: reg,
    group: group,
    bangla: bangla,
    english: eng,
    ict: ict,
    physics: phy,
    Chemistry: chem,
    higherMath: math,
    biology: bio,
  });
  const rsp = await Hsc.save();
  res.json({ msg: "student has been saved on our system" });
}

module.exports = {
  enterNewStudent: enterNewStudent,
  saveCertificate: saveCertificate,
  getCerti: getCerti,
  // getStudentProfile: getStudentProfile
};
