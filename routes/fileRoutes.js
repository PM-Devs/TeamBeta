const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController.js');
const authMiddleware = require("../middelware/authMiddleware.js");
const validationMiddleware = require("../middelware/validationMiddleware.js");
const { check } = require('express-validator');

// Create a new file
router.post('/files', [
    check('name').not().isEmpty(),
    check('teamId').not().isEmpty()
], validationMiddleware, authMiddleware, fileController.createFile);

// Get all files for a team
router.get('/files/team/:teamId', authMiddleware, fileController.getAllFilesForTeam);

// Get a file by ID
router.get('/files/:id', authMiddleware, fileController.getFileById);

// Update a file by ID
router.put('/files/:id', [
    check('name').not().isEmpty()
], validationMiddleware, authMiddleware, fileController.updateFile);

// Delete a file by ID
router.delete('/files/:id', authMiddleware, fileController.deleteFile);

module.exports = router;
