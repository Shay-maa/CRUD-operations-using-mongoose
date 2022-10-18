const studentsController = require("../Controllers/StudentsControllersDB");
const express = require("express");
const router = express.Router();
const studentValidator = require("../middlewares/StudentsValidatorMW.js");

router.param("id", (req, res, nxt, val) => {
  if (/^[0-9a-fA-F]{24}$/.test(val)) {
    req.id = val;
    nxt();
  } else {
    res.send("invalid id");
  }
});

router.get("/", studentsController.getAllStudents);

router.get("/:id", studentsController.getStudentByID);

router.post("/", studentValidator, studentsController.addNewStudent);

router.put("/:id", studentsController.updatStudentByID);

router.delete("/:id", studentsController.deleteStudentByID);

module.exports = router;
