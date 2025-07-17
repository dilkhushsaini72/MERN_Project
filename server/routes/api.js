const router = require("express").Router();
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");

router.post("/reg", userController.regController);
router.post("/login", userController.loginController);
router.get("/show-trending", userController.showTrendingController);
router.post("/userquery", userController.userQueryController);

router.post("/create-product", adminController.createProduct);
router.get("/show-product", adminController.showProduct);
router.get("/getsingleproduct/:id", adminController.getsingleproduct);
router.delete("/delete-product/:id", adminController.deleteProduct);
router.put("/update-product", adminController.updateProduct);
router.get("/show-query",adminController.showQueryController)
router.delete("/delete-query",adminController.deleteQueryController)

module.exports = router;
