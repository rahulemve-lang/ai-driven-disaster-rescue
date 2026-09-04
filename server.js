const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Request = require('./models/Request');
const Rescuer = require('./models/Rescuer');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Serve static frontend files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to Database
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/beacon');

// REST Endpoint: Submit SOS Request
app.post('/api/requests', async (req, res) => {
  try {
    const { requestId, name, injury, situation, lat, lng, photoUrl } = req.body;
    
    const newRequest = await Request.create({
      requestId,
      victimName: name,
      injury,
      situation,
      photoUrl,
      location: { type: 'Point', coordinates: [lng, lat] }
    });

    // Broadcast new incident to all connected rescuers
    io.emit('incident:new', newRequest);

    res.status(201).json({ success: true, data: newRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// REST Endpoint: Get Nearby Rescuers
