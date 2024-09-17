const Product = require('../models/Product');
const ErrorResponse = require('../utils/errorHandler').ErrorResponse;

// Create a new product
exports.createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

// Get all products
exports.getProducts = async () => {
  return await Product.find();
};

// Get a single product
exports.getProduct = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
  return product;
};

// Update a product
exports.updateProduct = async (id, productData) => {
  const product = await Product.findByIdAndUpdate(id, productData, { new: true, runValidators: true });
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
  return product;
};

// Delete a product
exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
};
