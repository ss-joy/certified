const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  reg: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Student", studentSchema);
