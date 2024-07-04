const mongoose = require('mongoose');

const fileVersionSchema = new mongoose.Schema({
    file: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true },
    versionNumber: { type: Number, required: true },
    filePath: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('FileVersion', fileVersionSchema);
