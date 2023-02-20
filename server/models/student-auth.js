const mongoose = require("mongoose");
const studentAuthSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("StudnetAuthInfo", studentAuthSchema);
