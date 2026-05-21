const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number']
  },
  message: {
    type: String,
    required: [true, 'Please add a message']
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'resolved'],
    default: 'pending'
  },
  type: {
    type: String,
    enum: ['general', 'bulk-order', 'product'],
    default: 'general'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);
