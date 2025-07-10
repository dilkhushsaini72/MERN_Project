const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/reg", userController.regController);
router.post("/login", userController.loginController);

module.exports = router;
