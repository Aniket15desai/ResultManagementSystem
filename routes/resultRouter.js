const {
  getResults,
  getStudentList,
  addResults,
  addResultItems,
  getResultItemsById,
  getResultItems,
  viewResultById,
  viewResultStudentById
} = require("../controllers/resultController");

const router = require("express").Router();

router.get("/getAllResults", getResults);
router.get("/getAllStudentList", getStudentList);
router.post("/addResult", addResults);
router.post("/addResultItem", addResultItems);
router.get("/getResultItemsById", getResultItemsById);
router.get("/getResultItems", getResultItems);
router.get("/viewResultById", viewResultById);
router.get("/viewStudentResultById", viewResultStudentById);

module.exports = router;
