const TeamMember = require('../models/teamMemberModel.js');

// Add a team member
exports.addTeamMember = async (req, res) => {
    try {
        const teamMember = new TeamMember(req.body);
        await teamMember.save();
        res.status(201).send(teamMember);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all team members
exports.getAllTeamMembers = async (req, res) => {
    try {
        const teamMembers = await TeamMember.find({});
        res.status(200).send(teamMembers);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a team member by ID
exports.getTeamMemberById = async (req, res) => {
    try {
        const teamMember = await TeamMember.findById(req.params.id);
        if (!teamMember) {
            return res.status(404).send();
        }
        res.status(200).send(teamMember);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a team member by ID
exports.updateTeamMember = async (req, res) => {
    try {
        const teamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!teamMember) {
            return res.status(404).send();
        }
        res.status(200).send(teamMember);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a team member by ID
exports.deleteTeamMember = async (req, res) => {
    try {
        const teamMember = await TeamMember.findByIdAndDelete(req.params.id);
        if (!teamMember) {
            return res.status(404).send();
        }
        res.status(200).send(teamMember);
    } catch (error) {
        res.status(500).send(error);
    }
};
