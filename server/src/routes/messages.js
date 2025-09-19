import express from "express";
import auth from "../middleware/auth.js";
import Message from "../models/Message.js";

const router = express.Router();

// Sending message
router.post("/", auth, async (req, res) => {
  console.log(req)
  const { senderId, receiverId, text } = req.body;
  console.log(senderId,receiverId,text,"TETETE")

  if (!senderId || !receiverId || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMsg = new Message({ senderId, receiverId, text });
    const savedMsg = await newMsg.save();
    res.status(201).json(savedMsg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Get chat history of two users
router.get("/:userId", auth, async (req, res) => {
  const currentUserId = req.userId;
  const otherUserId = req.params.userId;

  try {
    const messages = await Message.find({
      $or: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
