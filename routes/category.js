const express = require('express');
const router = express.Router();

const { getCategoryById, createCategory, getAllCategory, updateCategory } = require('../controllers/category');
const { isSignedIn, isAdmin, isAuthenticated } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');

// Params
router.param('userId', getUserById);
router.param('categoryId', getCategoryById);

// Actual Routers

//create
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory);

//read
router.get('/category/:categoryId', getCategory);
router.get('/categories', getAllCategory);

//update
router.put('/category/:categoryId/:userId', isSignedIn, isAuthenticated, isAdmin, updateCategory);

module.exports = router;

