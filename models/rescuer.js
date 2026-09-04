const mongoose = require('mongoose');

const RescuerSchema = new mongoose.Schema({
  name: { type: String, required: true },
