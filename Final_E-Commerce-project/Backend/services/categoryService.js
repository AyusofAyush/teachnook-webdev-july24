const Category = require('../models/Category');
const ErrorResponse = require('../utils/errorHandler').ErrorResponse;

// Create a new category
exports.createCategory = async (categoryData) => {
  const category = await Category.create(categoryData);
  return category;
};

// Get all categories
exports.getCategories = async () => {
  return await Category.find();
};

// Get a single category
exports.getCategory = async (id) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new ErrorResponse('Category not found', 404);
  }
  return category;
};

// Update a category
exports.updateCategory = async (id, categoryData) => {
  const category = await Category.findByIdAndUpdate(id, categoryData, { new: true, runValidators: true });
  if (!category) {
    throw new ErrorResponse('Category not found', 404);
  }
  return category;
};

// Delete a category
exports.deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    throw new ErrorResponse('Category not found', 404);
  }
};
