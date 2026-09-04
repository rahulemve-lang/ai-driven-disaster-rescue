const mongoose = require('mongoose');

const RescuerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  capability: { type: String, required: true },
