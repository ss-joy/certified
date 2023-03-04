const mongoose = require("mongoose");
const allStudentsSchema = mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("allStudents", allStudentsSchema);
