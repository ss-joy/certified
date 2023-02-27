const jwt = require("jsonwebtoken");

function getStudentProfile(req, res) {
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

module.exports = { getStudentProfile: getStudentProfile };
