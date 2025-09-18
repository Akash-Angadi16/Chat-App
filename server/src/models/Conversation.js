import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
  title: { type: String },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Conversation', ConversationSchema);
