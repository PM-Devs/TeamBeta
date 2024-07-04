const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController.js');
const authMiddleware = require("../middelware/authMiddleware.js");
const validationMiddleware = require("../middelware/validationMiddleware.js");
const { check } = require('express-validator');

// Create a new chat message
router.post('/chats', [
    check('message').not().isEmpty(),
    check('teamId').not().isEmpty(),
    check('senderId').not().isEmpty()
], validationMiddleware, authMiddleware, chatController.createChat);

// Get all chat messages for a team
router.get('/chats/team/:teamId', authMiddleware, chatController.getAllChatsForTeam);

// Get a chat message by ID
router.get('/chats/:id', authMiddleware, chatController.getChatById);

// Update a chat message by ID
router.put('/chats/:id', [
    check('message').not().isEmpty()
], validationMiddleware, authMiddleware, chatController.updateChat);

// Delete a chat message by ID
router.delete('/chats/:id', authMiddleware, chatController.deleteChat);

module.exports = router;
