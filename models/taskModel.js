const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], required: true },
    createdAt: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
