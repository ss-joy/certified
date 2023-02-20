const mongoose = require("mongoose");

const hscCertificateSchema = new mongoose.Schema({});

module.exports = mongoose.model("HscCertificate", hscCertificateSchema);
