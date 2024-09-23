const Product = require('../models/Product');
const ErrorResponse = require('../utils/errorHandler');

// Create a new product
exports.createProduct = async (productData) => {
  const { name, price, description, category, stock, product_img } = productData;
  const product = await Product.create({ name, price, description, category, stock, product_img });
  return product;
};

// Get all products
exports.getProducts = async () => {
  const products = await Product.find().populate('category', 'name');
  return products;
};

// Get a single product by ID
exports.getProduct = async (id) => {
  const product = await Product.findById(id).populate('category', 'name');
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
  return product;
};

// Update a product by ID
exports.updateProduct = async (id, productData) => {
  const product = await Product.findByIdAndUpdate(id, productData, { new: true, runValidators: true });
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
  return product;
};

// Delete a product by ID
exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ErrorResponse('Product not found', 404);
  }
};
