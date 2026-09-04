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

