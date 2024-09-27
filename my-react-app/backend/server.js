const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
// Express App and Server Setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// Middleware
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
// Socket.io for Chat
io.on('connection', (socket) => {
console.log('User connected');
// Public message broadcast

socket.on('public-message', (message) => {
io.emit('broadcast', message);
});
// Private chat requests
socket.on('private-request', ({ toUserId, fromUserId }) => {
io.to(toUserId).emit('private-request', { fromUserId });
});
socket.on('accept-private', ({ fromUserId, toUserId }) => {
io.to(fromUserId).emit('private-accepted', { toUserId });
});
socket.on('disconnect', () => {
console.log('User disconnected');
});
});
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/facebook_clone', {
useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
console.log('Connected to MongoDB');
server.listen(5000, () => console.log('Server is running on port 5000'));
});