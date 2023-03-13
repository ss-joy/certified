const mongoose = require("mongoose");
const allStudentsSchema = mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  mail: String,
});
module.exports = mongoose.model("allStudents", allStudentsSchema);
