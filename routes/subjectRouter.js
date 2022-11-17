const { getSubject, addSubject, updateSubject, deleteSubject } = require("../controllers/subjectController");
const router = require("express").Router();

router.get('/getSubject', getSubject);
router.post('/addSubject', addSubject);
router.post('/updateSubject', updateSubject);
router.post('/deleteSubject', deleteSubject);

module.exports = router;