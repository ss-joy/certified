const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth-routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(authRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://userOne:12345@cluster1.exfjbjn.mongodb.net/sas?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connection is ok");
    app.listen(5000, () => {
      console.log("server started in port 5000");
    });
  })
  .catch((err) => {
    console.log("could not connect to databse.");
    console.log("error is --->", err);
  });
