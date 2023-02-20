const express = require("express");
const app = express();
const mongoose = require("mongoose");

const studentRoutes = require("./routes/student-routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(studentRoutes);

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
