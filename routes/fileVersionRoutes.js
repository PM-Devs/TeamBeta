const express = require('express');
const router = express.Router();
const fileVersionController = require('../controllers/fileVersionController.cjs');
const authMiddleware = require('../middleware/authMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');
const { check } = require('express-validator');

// Create a new file version
router.post('/file-versions', [
    check('fileId').not().isEmpty(),
    check('version').not().isEmpty()
], validationMiddleware, authMiddleware, fileVersionController.createFileVersion);

// Get all versions of a file
router.get('/file-versions/file/:fileId', authMiddleware, fileVersionController.getAllVersionsOfFile);

// Get a file version by ID
router.get('/file-versions/:id', authMiddleware, fileVersionController.getFileVersionById);

// Update a file version by ID
router.put('/file-versions/:id', [
    check('version').not().isEmpty()
], validationMiddleware, authMiddleware, fileVersionController.updateFileVersion);

// Delete a file version by ID
router.delete('/file-versions/:id', authMiddleware, fileVersionController.deleteFileVersion);

module.exports = router;
