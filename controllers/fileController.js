const File = require('../models/fileModel.js');

// Create a new file
exports.createFile = async (req, res) => {
    try {
        const file = new File(req.body);
        await file.save();
        res.status(201).send(file);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all files for a team
exports.getAllFilesForTeam = async (req, res) => {
    try {
        const files = await File.find({ team: req.params.teamId });
        res.status(200).send(files);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a file by ID
exports.getFileById = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).send();
        }
        res.status(200).send(file);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a file by ID
exports.updateFile = async (req, res) => {
    try {
        const file = await File.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!file) {
            return res.status(404).send();
        }
        res.status(200).send(file);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a file by ID
exports.deleteFile = async (req, res) => {
    try {
        const file = await File.findByIdAndDelete(req.params.id);
        if (!file) {
            return res.status(404).send();
        }
        res.status(200).send(file);
    } catch (error) {
        res.status(500).send(error);
    }
};
