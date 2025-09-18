import express from 'express';
import auth from '../middleware/auth.js';
import Conversation from '../models/Conversation.js';

const router = express.Router();

// List conversations for current user
router.get('/', auth, async (req, res) => {
  try {
    const convs = await Conversation.find({ participants: req.userId })
      .populate('participants', 'name email avatarUrl')
      .populate({ path: 'lastMessage' })
      .sort({ updatedAt: -1 });
    res.json(convs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a conversation (participants array)
router.post('/', auth, async (req, res) => {
  const { participants, title } = req.body; // participants: [userId1, userId2]
  try {
    const conv = await Conversation.create({ participants, title });
    res.status(201).json(conv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
