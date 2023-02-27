const mongoose = require("mongoose");

const hscCertificateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  college: {
    type: String,
  },
  reg: {
    type: String,
  },
  roll: {
    type: String,
  },
  board: {
    type: String,
  },
  group: string,
  gpa: String,
  birthday: String,
  bangla: String,
  english: String,
  physics: String,
  Chemistry: String,
  higherMath: String,
  biology: String,
});

module.exports = mongoose.model("HscCertificate", hscCertificateSchema);
