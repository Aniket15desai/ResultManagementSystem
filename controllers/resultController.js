const { get, getStudent, add, addItems, getResultById, getSubjectItem, viewResult, viewResultStudent } = require("../models/resultModel");

module.exports = {
  addResults: (req, res) => {
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
  addResultItems: (req, res) => {
    const body = req.body.newSubject;
    const resultId = req.body.newResultId;
    body.forEach(element => {
      addItems(element, resultId, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
      });
    });
    return res.status(200).json({
      success: 1,
    });
  },
  getResults: (req, res) => {
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
          message: "No Result found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getStudentList: (req, res) => {
    getStudent((err, results) => {
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
          message: "No result found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getResultItemsById: (req, res) => {
    const body = req.query;
    console.log(body);
    getResultById(body, (err, results) => {
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
          message: "No result found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    })
  },
  getResultItems: (req, res) => {
    const body = req.query;
    console.log(body);
    getSubjectItem(body, (err, results) => {
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
          message: "No result found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    })
  },
  viewResultById: (req, res) => {
    const body = req.query;
    console.log(body);
    viewResult(body, (err, results) => {
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
          message: "No result found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    })
  },
  viewResultStudentById: (req, res) => {
    const body = req.query;
    console.log(body);
    viewResultStudent(body, (err, results) => {
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
          message: "No result found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    })
  },
};
