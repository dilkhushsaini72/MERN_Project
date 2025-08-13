const router = require("express").Router();
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");
const upload = require("../middleware/multer");
const authMiddleware = require("../middleware/Auth");
const adminAuth = require("../middleware/adminAuth");

router.post("/reg", userController.regController);
router.post("/login", userController.loginController);
router.get("/show-trending", userController.showTrendingController);
router.get("/show-trending/:cat", userController.showProductOnCat);
router.get("/single-productdata/:id", userController.showSingleProduct);
router.get("/single-productbyname/:id", userController.showSingleProductByName);
router.post("/userquery", userController.userQueryController);
router.post("/cart-items", authMiddleware, userController.cartItemsController);
router.get(
  "/show-cart-items",
  authMiddleware,
  userController.showCartItemsController
);
router.delete(
  "/delete-cart-item",
  authMiddleware,
  userController.deleteCartItemsController
);
router.post(
  "/create-order",
  authMiddleware,
  userController.createOrderController
);
router.post("/verify-order", userController.verifyOrderController);

// ****************Admin routes*******************

router.post(
  "/create-product",
  upload.single("productImg"),
  adminController.createProduct
);
router.get("/show-product", adminAuth, adminController.showProduct);
router.get("/getsingleproduct/:id", adminController.getsingleproduct);
router.delete("/delete-product/:id", adminController.deleteProduct);
router.put("/update-product", adminController.updateProduct);
router.get("/show-query", adminAuth, adminController.showQueryController);
router.delete("/delete-query", adminController.deleteQueryController);
router.get("/single-query/:id", adminController.getSingleQuery);
router.post("/reply-query", adminController.replyQueryController);

module.exports = router;
