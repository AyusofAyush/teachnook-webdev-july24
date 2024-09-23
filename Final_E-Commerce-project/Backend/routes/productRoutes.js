const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Public route to get all products
router.get("/", protect, productController.getProducts);

// Admin-only routes to create, update, and delete products
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  productController.createProduct
);
router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  productController.updateProduct
);
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  productController.deleteProduct
);

module.exports = router;
