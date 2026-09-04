const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requestId: { type: String, required: true, unique: true },
  victimName: { type: String, default: 'Anonymous' },
  injury: { type: String },
