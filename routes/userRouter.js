const { getUser, updateDetails } = require("../controllers/userController");
const router = require("express").Router();

router.get("/getUser", getUser);
router.post("/updateUser", updateDetails);

module.exports = router;