const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const studentRouter = require("./routes/Students");
const uri = "mongodb://localhost:27017/studentsRecords";
app.use(express.json());
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

//connect to DB
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/Students", studentRouter);

app.listen(port, () => {
  console.log(`Listening....!!!!!!!${port}`);
});
