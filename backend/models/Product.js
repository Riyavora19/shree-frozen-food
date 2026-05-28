const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true
  },
  image: {
    type: String,
    default: 'default-product.jpg'
  },
  weight: {
    type: String,
    default: '500g'
  },
  price: {
    type: Number,
    default: 0
  },
  available: {
    type: Boolean,
    default: true
  },
  nutrition: {
    calories: String,
    protein: String,
    carbs: String,
    fat: String
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
