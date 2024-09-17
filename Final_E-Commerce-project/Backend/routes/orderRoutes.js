const express = require('express');
const { createOrder, getOrders, getOrder, updateOrder, deleteOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createOrder)
  .get(protect, authorizeRoles('admin'), getOrders);

router.route('/:id')
  .get(protect, getOrder)
  .put(protect, authorizeRoles('admin'), updateOrder)
  .delete(protect, authorizeRoles('admin'), deleteOrder);

module.exports = router;
