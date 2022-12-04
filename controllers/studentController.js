const { add, get, update, deleteSid } = require("../models/studentModel");

module.exports = {
  addStudent: (req, res) => {
    const body = req.body;
    add(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getStudents: (req, res) => {
    get((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error.",
        });
      }
      if (!results) {
        return res.status(500).json({
          success: 0,
          message: "No cars found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateStudent: (req, res) => {
    const body = req.body;
    update(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  deleteStudent: (req, res) => {
    const body = req.body;
    deleteSid(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Details deleted successfully",
      });
    });
  },
};
