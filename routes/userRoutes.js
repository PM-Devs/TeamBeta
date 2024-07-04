const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middelware/authMiddleware.js');
const validationMiddleware = require('../middelware/validationMiddleware.js');
const { check } = require('express-validator');

// Create a new user
router.post('/users', [
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
], validationMiddleware, userController.createUser);

// Get all users
router.get('/users', authMiddleware, userController.getAllUsers);

// Get a user by ID
router.get('/users/:id', authMiddleware, userController.getUserById);

// Update a user by ID
router.put('/users/:id', authMiddleware, userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', authMiddleware, userController.deleteUser);

module.exports = router;
