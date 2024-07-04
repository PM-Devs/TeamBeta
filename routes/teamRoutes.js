const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const authMiddleware = require('../middleware/authMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');
const { check } = require('express-validator');

// Create a new team
router.post('/teams', [
    check('name').not().isEmpty()
], validationMiddleware, authMiddleware, teamController.createTeam);

// Get all teams
router.get('/teams', authMiddleware, teamController.getAllTeams);

// Get a team by ID
router.get('/teams/:id', authMiddleware, teamController.getTeamById);

// Update a team by ID
router.put('/teams/:id', [
    check('name').not().isEmpty()
], validationMiddleware, authMiddleware, teamController.updateTeam);

// Delete a team by ID
router.delete('/teams/:id', authMiddleware, teamController.deleteTeam);

module.exports = router;
