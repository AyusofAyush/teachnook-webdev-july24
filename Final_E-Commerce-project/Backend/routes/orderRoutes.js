const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// User routes
router.post("/", protect, orderController.createOrder);
router.get("/", protect, authorizeRoles("admin"), orderController.getOrders);

// Admin routes
router.get("/:id", protect, authorizeRoles("admin"), orderController.getOrder);
router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  orderController.updateOrder
);
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  orderController.deleteOrder
);

module.exports = router;
