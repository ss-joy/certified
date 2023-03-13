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

  bangla: Number,
  english: Number,
  physics: Number,
  Chemistry: Number,
  higherMath: Number,
  biology: Number,
  ict: Number,
});

module.exports = mongoose.model("HscCertificate", hscCertificateSchema);
