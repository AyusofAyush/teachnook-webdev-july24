const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandler').ErrorResponse;
const generateToken = require('../utils/generateToken');

// Register a new user
exports.registerUser = async (userData) => {
  const { name, email, password } = userData;
  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);
  return { token, user };
};

// Login user
exports.loginUser = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    return { token, user };
  } else {
    throw new ErrorResponse('Invalid email or password', 401);
  }
};

// Get user profile
exports.getUserProfile = async (id) => {
  const user = await User.findById(id);
  return user;
};

// Update user profile
exports.updateUserProfile = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  return user;
};

// Admin: Get all users
exports.getUsers = async () => {
  return await User.find();
};

// Admin: Get single user
exports.getUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

// Admin: Delete a user
exports.deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};
