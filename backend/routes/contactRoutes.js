const express = require('express');
const { submitContact, getContacts, markAsRead } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', submitContact);
router.get('/', protect, getContacts);
router.put('/:id', protect, markAsRead);

module.exports = router;
