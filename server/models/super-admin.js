const mongoose = require("mongoose");
const superAdminSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("SuperAdmin", superAdminSchema);
