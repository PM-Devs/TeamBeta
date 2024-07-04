const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');
const authMiddleware = require('../middleware/authMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');
const { check } = require('express-validator');

// Create a new task
router.post('/tasks', [
    check('title').not().isEmpty(),
    check('teamId').not().isEmpty(),
    check('assigneeId').not().isEmpty()
], validationMiddleware, authMiddleware, taskController.createTask);

// Get all tasks for a team
router.get('/tasks/team/:teamId', authMiddleware, taskController.getAllTasksForTeam);

// Get a task by ID
router.get('/tasks/:id', authMiddleware, taskController.getTaskById);

// Update a task by ID
router.put('/tasks/:id', [
    check('title').not().isEmpty()
], validationMiddleware, authMiddleware, taskController.updateTask);

// Delete a task by ID
router.delete('/tasks/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
