const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
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
  image: String,
});
module.exports = mongoose.model("admin", adminSchema);
