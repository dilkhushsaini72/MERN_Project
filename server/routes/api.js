const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/reg", userController.regController);

module.exports = router;
