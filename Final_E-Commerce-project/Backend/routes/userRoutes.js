const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

// Protected routes
router.get("/profile", protect, userController.getUserProfile);
router.put("/profile", protect, userController.updateUserProfile);

// Admin-only routes
router.get("/", protect, authorizeRoles("admin"), userController.getUsers);
router.get("/:id", protect, authorizeRoles("admin"), userController.getUser);
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  userController.deleteUser
);

module.exports = router;
