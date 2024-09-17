const Order = require('../models/Order');
const ErrorResponse = require('../utils/errorHandler').ErrorResponse;

// Create an order
exports.createOrder = async (orderData) => {
  const order = await Order.create(orderData);
  return order;
};

// Get all orders (Admin only)
exports.getOrders = async () => {
  return await Order.find().populate('user', 'name email');
};

// Get a single order
exports.getOrder = async (id) => {
  const order = await Order.findById(id).populate('user', 'name email');
  if (!order) {
    throw new ErrorResponse('Order not found', 404);
  }
  return order;
};

// Update order status
exports.updateOrder = async (id, orderData) => {
  const order = await Order.findByIdAndUpdate(id, orderData, { new: true, runValidators: true });
  if (!order) {
    throw new ErrorResponse('Order not found', 404);
  }
  return order;
};

// Delete an order
exports.deleteOrder = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    throw new ErrorResponse('Order not found', 404);
  }
};
