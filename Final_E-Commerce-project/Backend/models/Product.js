const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Please add a category'],
  },
  stock: {
    type: Number,
    default: 0,
  },
  product_img: {
    type: String, // URL to the product image
    default: '', // Optional, can be empty
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
