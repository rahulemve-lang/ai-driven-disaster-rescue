const mongoose = require('mongoose');

const RescuerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  capability: { type: String, required: true },
  equipment: [{ type: String }],
  mode: { type: String, default: 'car' },
  isOnline: { type: Boolean, default: false },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number] }
