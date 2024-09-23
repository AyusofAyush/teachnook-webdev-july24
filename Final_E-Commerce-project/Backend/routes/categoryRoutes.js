const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Public route to get all categories
router.get("/", protect, categoryController.getCategories);

// Admin-only routes to create, update, and delete categories
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  categoryController.createCategory
);
router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  categoryController.updateCategory
);
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  categoryController.deleteCategory
);

module.exports = router;
