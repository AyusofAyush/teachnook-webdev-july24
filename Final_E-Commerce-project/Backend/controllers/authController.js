const authService = require('../services/authService');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/responseHandler');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandler').ErrorResponse;


// Register a new user
exports.registerUser = asyncHandler(async (req, res) => {
  const { token, user } = await authService.registerUser(req.body);
  sendResponse(res, 201, { token, user }, 'User registered successfully');
});

// Login user
exports.loginUser = asyncHandler(async (req, res) => {
  const { token, user } = await authService.loginUser(req.body);
  sendResponse(res, 200, { token, user }, 'Login successful');
});

// Get user profile
exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await authService.getUserProfile(req.user._id);
  sendResponse(res, 200, user, 'User profile retrieved successfully');
});

// Update user profile
exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await authService.updateUserProfile(req.user._id, req.body);
  sendResponse(res, 200, user, 'User profile updated successfully');
});

// Get all users (Admin only)
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  sendResponse(res, 200, users, 'Users retrieved successfully');
});

// Get a single user by ID (Admin only)
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorResponse('User not found', 404));
  }
  sendResponse(res, 200, user, 'User retrieved successfully');
});

// Delete a user by ID (Admin only)
exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(new ErrorResponse('User not found', 404));
  }
  sendResponse(res, 200, null, 'User deleted successfully');
});
