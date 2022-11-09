const { getStudents } = require("../controllers/studentController");
const router = require("express").Router();

router.get("/getStudents", getStudents);

module.exports = router;
