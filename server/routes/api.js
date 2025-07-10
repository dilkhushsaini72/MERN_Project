const router = require("express").Router();
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");

router.post("/reg", userController.regController);
router.post("/login", userController.loginController);
router.post("/create-product", adminController.createProduct);
router.get("/show-product", adminController.showProduct);
router.delete("/delete-product/:id", adminController.deleteProduct);
router.put("/update-product/:id", adminController.updateProduct);

module.exports = router;
