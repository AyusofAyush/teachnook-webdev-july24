const userService = require('../services/userService');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/responseHandler');

// Register a new user
exports.registerUser = asyncHandler(async (req, res) => {
  const { token, user } = await userService.registerUser(req.body);
  sendResponse(res, 201, { token, user }, 'User registered successfully');
});

// Login user
exports.loginUser = asyncHandler(async (req, res) => {
  const { token, user } = await userService.loginUser(req.body);
  sendResponse(res, 200, { token, user }, 'Login successful');
});

// Get user profile
exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await userService.getUserProfile(req.user._id);
  sendResponse(res, 200, user, 'User profile retrieved successfully');
});

// Update user profile
exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await userService.updateUserProfile(req.user._id, req.body);
  sendResponse(res, 200, user, 'User profile updated successfully');
});

// Admin: Get all users
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers();
  sendResponse(res, 200, users, 'Users retrieved successfully');
});

// Admin: Get a single user
exports.getUser = asyncHandler(async (req, res) => {
  const user = await userService.getUser(req.params.id);
  sendResponse(res, 200, user, 'User retrieved successfully');
});

// Admin: Delete a user
exports.deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);
  sendResponse(res, 200, null, 'User deleted successfully');
});
