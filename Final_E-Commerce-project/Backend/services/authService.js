const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandler').ErrorResponse;
const generateToken = require('../utils/generateToken');

// Register a new user
exports.registerUser = async (userData) => {
  const { name, email, password } = userData;
  const user = await User.create({ name, email, password });
  console.log('User', user);
  const token = generateToken(user._id);
  console.log('Generating token', token, user);
  return { token, user };
};

// Login user
exports.loginUser = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new ErrorResponse('Invalid email or password', 401);
  }
  const token = generateToken(user._id);
  return { token, user };
};

// Get the logged-in user's profile
exports.getUserProfile = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }
  return user;
};

// Update the logged-in user's profile
exports.updateUserProfile = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }
  return user;
};
