const { add, get, update, deleteById } = require('../models/classModel');

module.exports = {
  addClass: (req, res) => {
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
    getClass: (req, res) => {
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
    updateClass: (req, res) => {
        const body = req.body;
        update(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "Details updated successfully",
          });
        });
    },
    deleteClass: (req, res) => {
        const body = req.body;
        deleteById(body, (err, results) => {
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
}