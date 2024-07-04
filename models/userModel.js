const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  phone: { type: String },
  role: { type: String, enum: ['Student', 'Supervisor', 'Admin'], required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
