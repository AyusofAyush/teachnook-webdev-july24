const categoryService = require('../services/categoryService');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/responseHandler');

// Create a new category
exports.createCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  sendResponse(res, 201, category, 'Category created successfully');
});

// Get all categories
exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.getCategories();
  sendResponse(res, 200, categories, 'Categories retrieved successfully');
});

// Get a single category
exports.getCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.getCategory(req.params.id);
  sendResponse(res, 200, category, 'Category retrieved successfully');
});

// Update a category
exports.updateCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.updateCategory(req.params.id, req.body);
  sendResponse(res, 200, category, 'Category updated successfully');
});

// Delete a category
exports.deleteCategory = asyncHandler(async (req, res) => {
  await categoryService.deleteCategory(req.params.id);
  sendResponse(res, 200, null, 'Category deleted successfully');
});
