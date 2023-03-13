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
  institution: {
    type: String,
  },
  centre: {
    type: String,
  },
  reg: {
    type: String,
  },

  group: String,

  bangla: String,
  english: String,
  physics: String,
  Chemistry: String,
  higherMath: String,
  biology: String,
  ict: String,
});

module.exports = mongoose.model("HscCertificate", hscCertificateSchema);
