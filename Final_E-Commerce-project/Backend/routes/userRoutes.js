const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

// Protected routes
router.get("/profile", protect, authController.getUserProfile);
router.put("/profile", protect, authController.updateUserProfile);

// Admin routes
router.get("/users", protect, isAdmin, authController.getUsers); // Only admins can access
router.get("/users/:id", protect, isAdmin, authController.getUser); // Only admins can access
router.delete("/users/:id", protect, isAdmin, authController.deleteUser); // Only admins can access

module.exports = router;
