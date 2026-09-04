const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requestId: { type: String, required: true, unique: true },
  victimName: { type: String, default: 'Anonymous' },
  injury: { type: String },
  situation: { type: String },
  photoUrl: { type: String },
  status: { type: String, enum: ['pending', 'matched', 'resolved', 'cancelled'], default: 'pending' },
  urgencyLevel: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'high' },
  urgencyScore: { type: Number, default: 5 },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
