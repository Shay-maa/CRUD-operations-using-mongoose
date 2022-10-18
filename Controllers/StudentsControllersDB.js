const Student = require("../models/StudentModelDB");

//create student

let addNewStudent = (req, res) => {
  let std = new Student({
    fn: req.body.fn,
    ln: req.body.ln,
    dept: req.body.dept,
    id: req.body.id,
  });
  std
    .save()
    .then(() => {
      res.send(std);
      console.log(req.body);
    })
    .catch((err) => {
      for (let e in err.errors) {
        console.log(err.errors[e].message);
        res.status(400).send("Bad Request....");
      }
    });
};

//get AllStudents

const getAllStudents = async (req, res) => {
  try {
    let std = await Student.find();
    res.send(std);
  } catch (err) {
    for (let e in err.errors) {
      console.log(err.errors[e].message);
      res.status(400).send("Bad Request....");
    }
  }
};

//getStudentByID

const getStudentByID = async (req, res) => {
  try {
    let std = await Student.findById(req.params.id);
    if (!std)
      return res.status(404).send("Student with the given id was not found");
    res.send(std);
  } catch (err) {
    for (let e in err.errors) {
      console.log(err.errors[e].message);
      res.status(400).send("Bad Request....");
    }
  }
};

//updateStudents

let updatStudentByID = async (req, res) => {
  try {
    let std = await Student.findByIdAndUpdate(req.params.id, req.body, {
      returnOriginal: false,
    });
    if (!std)
      return res.status(404).send("Student with the given ID was not found ");
    res.send(std);
  } catch (err) {
    for (let e in err.errors) {
      console.log(err.errors[e].message);
      res.status(400).send("Bad Request....");
    }
  }
};

//delete student

const deleteStudentByID = async (req, res) => {
  try {
    const std = await Student.findByIdAndRemove(req.params.id);
    if (!std)
      return res.status(404).send("Student with the given ID was not found");
    res.send(std);
  } catch (err) {
    for (let e in err.errors) {
      console.log(err.errors[e].message);
      res.status(400).send("Bad Request....");
    }
  }
};

module.exports = {
  deleteStudentByID,
  getStudentByID,
  updatStudentByID,
  getAllStudents,
  addNewStudent,
};
