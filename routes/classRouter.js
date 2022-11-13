const { getClass, addClass, updateClass, deleteClass } = require('../controllers/classController');
const router = require("express").Router();

router.get('/getClass', getClass);
router.post('/addClass', addClass);
router.post('/updateClass', updateClass);
router.post('/deleteClass', deleteClass);

module.exports = router;