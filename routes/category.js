const express = require('express');
const router = express.Router();

const { getCategoryById, createCategory } = require('../controllers/category');
const { isSignedIn, isAdmin, isAuthenticated } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');

// Params
router.param('userId', getUserById);
router.param('categoryId', getCategoryById);

// Actual Routers
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory);

module.exports = router;

