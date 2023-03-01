const SuperAdmin = require("../models/super-admin");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
async function addAdmin(req, res) {
  const { superEmail, superPassword, name, email, password, mobile } = req.body;
  const adminFound = await SuperAdmin.findOne({ email: superEmail });
  if (!adminFound || adminFound.password !== superPassword) {
    return res.send(
      "Authentication failuere.Either you are not a super admin or you enterd wrong password"
    );
  }
  //super admin is ok
  const AdminOne = new Admin({
    name: name,
    email: email,
    password: password,
    mobile: mobile,
  });
  AdminOne.save()
    .then((response) => {
      return res
        .status(200)
        .json({ msg: "admin added", serverMsg: `${response}` });
    })
    .catch((err) => {
      res.status(404).json({
        msg: "admin not added",
        serverMsg: `${err}`,
      });
    });
}
async function getAdminDetails(req, res) {
  try {
    const { authorization } = req.headers;
    const adminId = req.params.id;
    // console.log(adminId);
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, "superdupersecret");
    const adminDetails = await Admin.findOne({ _id: adminId });
    console.log(adminDetails);

    res.json({
      name: adminDetails.name,
      email: adminDetails.email,
      mobile: adminDetails.mobile,
    });
  } catch (err) {
    res.status(404).json({
      msg: "error happended on the server",
      error: err,
    });
  }
}
module.exports = { addAdmin, getAdminDetails };
