const FileVersion = require('../models/fileVersionModel.js');

// Create a new file version
exports.createFileVersion = async (req, res) => {
    try {
        const fileVersion = new FileVersion(req.body);
        await fileVersion.save();
        res.status(201).send(fileVersion);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all versions of a file
exports.getAllVersionsOfFile = async (req, res) => {
    try {
        const fileVersions = await FileVersion.find({ file: req.params.fileId });
        res.status(200).send(fileVersions);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a file version by ID
exports.getFileVersionById = async (req, res) => {
    try {
        const fileVersion = await FileVersion.findById(req.params.id);
        if (!fileVersion) {
            return res.status(404).send();
        }
        res.status(200).send(fileVersion);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a file version by ID
exports.updateFileVersion = async (req, res) => {
    try {
        const fileVersion = await FileVersion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!fileVersion) {
            return res.status(404).send();
        }
        res.status(200).send(fileVersion);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a file version by ID
exports.deleteFileVersion = async (req, res) => {
    try {
        const fileVersion = await FileVersion.findByIdAndDelete(req.params.id);
        if (!fileVersion) {
            return res.status(404).send();
        }
        res.status(200).send(fileVersion);
    } catch (error) {
        res.status(500).send(error);
    }
};
