const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// Register Route
router.post('/register', async (req, res) => {
    const { handle, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ handle, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        res.status(500).json({ error: 'Handle already taken' });
    }
});
// Login Route
router.post('/login', async (req, res) => {
    const { handle, password } = req.body;
    const user = await User.findOne({ handle });
    if (!user) return res.status(400).json({ error: 'Invalid handle' });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({
        error: 'Invalid password' });
const token = jwt.sign({ id: user._id }, 'yourSecretKey');
        user.online = true;
        await user.save();
        res.json({ token, userId: user._id, handle: user.handle });
    });
    module.exports = router;