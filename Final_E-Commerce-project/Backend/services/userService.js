const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandler');
const generateToken = require('../utils/generateToken');

// Register a new user
exports.registerUser = async (userData) => {
  const { name, email, password, profile_img } = userData;
  const user = await User.create({ name, email, password, profile_img });
  const token = generateToken(user._id);
  return { token, user };
};

// Login user
exports.loginUser = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.matchPassword(password))) {
    throw new ErrorResponse('Invalid email or password', 401);
  }
  const token = generateToken(user._id);
  return { token, user };
};

// Get user profile
exports.getUserProfile = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }
  return user;
};

// Update user profile
exports.updateUserProfile = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }
  return user;
};

// Admin: Get all users
exports.getUsers = async () => {
  const users = await User.find();
  return users;
};

// Admin: Get single user by ID
exports.getUser = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }
  return user;
};

// Admin: Delete user by ID
exports.deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }
};
