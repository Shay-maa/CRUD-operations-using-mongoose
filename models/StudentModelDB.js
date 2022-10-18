//require mongoose
const mongoose = require("mongoose");

//create schema
const studentSchema = new mongoose.Schema({
  fn: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
  },
  ln: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
  },
  dept: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    unique: true,
    required: true,
  },
});

//create model
const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
