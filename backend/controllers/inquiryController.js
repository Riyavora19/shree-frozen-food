const Inquiry = require('../models/Inquiry');

// @desc    Create inquiry
// @route   POST /api/inquiries
// @access  Public
exports.createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message, type } = req.body;

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
      type: type || 'general'
    });

    res.status(201).json({
      message: 'Inquiry submitted successfully',
      inquiry
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
exports.getInquiries = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single inquiry
// @route   GET /api/inquiries/:id
// @access  Private/Admin
exports.getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      res.json(inquiry);
    } else {
      res.status(404).json({ message: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private/Admin
exports.updateInquiryStatus = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      inquiry.status = req.body.status || inquiry.status;
      const updatedInquiry = await inquiry.save();
      res.json(updatedInquiry);
    } else {
      res.status(404).json({ message: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private/Admin
exports.deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      await inquiry.deleteOne();
      res.json({ message: 'Inquiry removed' });
    } else {
      res.status(404).json({ message: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get inquiry stats
// @route   GET /api/inquiries/stats/dashboard
// @access  Private/Admin
exports.getInquiryStats = async (req, res) => {
  try {
    const total = await Inquiry.countDocuments();
    const pending = await Inquiry.countDocuments({ status: 'pending' });
    const contacted = await Inquiry.countDocuments({ status: 'contacted' });
    const resolved = await Inquiry.countDocuments({ status: 'resolved' });

    res.json({
      total,
      pending,
      contacted,
      resolved
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
