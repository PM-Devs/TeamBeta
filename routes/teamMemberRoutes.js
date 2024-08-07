const express = require('express');
const router = express.Router();
const teamMemberController = require("../controllers/teamMemberController.js");
const authMiddleware = require("../middelware/authMiddleware.js");
const validationMiddleware = require("../middelware/validationMiddleware.js");
const { check } = require('express-validator');

// Add a team member
router.post('/team-members', [
    check('userId').not().isEmpty(),
    check('teamId').not().isEmpty()
], validationMiddleware, authMiddleware, teamMemberController.addTeamMember);

// Get all team members
router.get('/team-members', authMiddleware, teamMemberController.getAllTeamMembers);

// Get a team member by ID
router.get('/team-members/:id', authMiddleware, teamMemberController.getTeamMemberById);

// Update a team member by ID
router.put('/team-members/:id', [
    check('role').not().isEmpty()
], validationMiddleware, authMiddleware, teamMemberController.updateTeamMember);

// Delete a team member by ID
router.delete('/team-members/:id', authMiddleware, teamMemberController.deleteTeamMember);

module.exports = router;
