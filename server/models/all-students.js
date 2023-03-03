const mongoose = require("mongoose");
const allStudentsSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  mobile: {
    type: String,
  },
});
module.exports = mongoose.model("allStudents", allStudentsSchema);
