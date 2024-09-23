const productService = require('../services/productService');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/responseHandler');

// Create a new product
exports.createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body);
  sendResponse(res, 201, product, 'Product created successfully');
});

// Get all products
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getProducts();
  sendResponse(res, 200, products, 'Products retrieved successfully');
});

// Get a single product by ID
exports.getProduct = asyncHandler(async (req, res) => {
  const product = await productService.getProduct(req.params.id);
  sendResponse(res, 200, product, 'Product retrieved successfully');
});

// Update a product by ID
exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  sendResponse(res, 200, product, 'Product updated successfully');
});

// Delete a product by ID
exports.deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  sendResponse(res, 200, null, 'Product deleted successfully');
});
