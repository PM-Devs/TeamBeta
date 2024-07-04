const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['Team Leader', 'Member'], required: true }
}, { timestamps: true });

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
