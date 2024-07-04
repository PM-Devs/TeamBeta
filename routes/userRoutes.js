const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middelware/authMiddleware.js');
const validationMiddleware = require('../middelware/validationMiddleware.js');
const { check } = require('express-validator');



// Create a new user
router.post('/users', [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('role').isIn(['Student', 'Supervisor', 'Admin']).withMessage('Role must be one of Student, Supervisor, or Admin')
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
