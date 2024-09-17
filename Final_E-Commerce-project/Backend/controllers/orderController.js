const orderService = require('../services/orderService');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/responseHandler');

// Create an order
exports.createOrder = asyncHandler(async (req, res) => {
  const orderData = { user: req.user._id, ...req.body };
  const order = await orderService.createOrder(orderData);
  sendResponse(res, 201, order, 'Order created successfully');
});

// Get all orders (Admin only)
exports.getOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getOrders();
  sendResponse(res, 200, orders, 'Orders retrieved successfully');
});

// Get a single order
exports.getOrder = asyncHandler(async (req, res) => {
  const order = await orderService.getOrder(req.params.id);
  sendResponse(res, 200, order, 'Order retrieved successfully');
});

// Update order status
exports.updateOrder = asyncHandler(async (req, res) => {
  const order = await orderService.updateOrder(req.params.id, req.body);
  sendResponse(res, 200, order, 'Order updated successfully');
});

// Delete an order
exports.deleteOrder = asyncHandler(async (req, res) => {
  await orderService.deleteOrder(req.params.id);
  sendResponse(res, 200, null, 'Order deleted successfully');
});
