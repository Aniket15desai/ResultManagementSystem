const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = require("express").Router();

router.get("/getStudents", getStudents);
router.post("/addStudent", addStudent);
router.post("/updateStudent", updateStudent);
router.post("/deleteStudent", deleteStudent);

module.exports = router;
