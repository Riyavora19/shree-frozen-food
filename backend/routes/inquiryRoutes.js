const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  getInquiryById,
  updateInquiryStatus,
  deleteInquiry,
  getInquiryStats
} = require('../controllers/inquiryController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
  .get(protect, admin, getInquiries)
  .post(createInquiry);

router.get('/stats/dashboard', protect, admin, getInquiryStats);

router.route('/:id')
  .get(protect, admin, getInquiryById)
  .put(protect, admin, updateInquiryStatus)
  .delete(protect, admin, deleteInquiry);

module.exports = router;
