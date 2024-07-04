const Chat = require('../models/chatModel.js');

// Create a new chat message
exports.createChat = async (req, res) => {
    try {
        const chat = new Chat(req.body);
        await chat.save();
        res.status(201).send(chat);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all chat messages for a team
exports.getAllChatsForTeam = async (req, res) => {
    try {
        const chats = await Chat.find({ team: req.params.teamId });
        res.status(200).send(chats);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a chat message by ID
exports.getChatById = async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id);
        if (!chat) {
            return res.status(404).send();
        }
        res.status(200).send(chat);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a chat message by ID
exports.updateChat = async (req, res) => {
    try {
        const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!chat) {
            return res.status(404).send();
        }
        res.status(200).send(chat);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a chat message by ID
exports.deleteChat = async (req, res) => {
    try {
        const chat = await Chat.findByIdAndDelete(req.params.id);
        if (!chat) {
            return res.status(404).send();
        }
        res.status(200).send(chat);
    } catch (error) {
        res.status(500).send(error);
    }
};
