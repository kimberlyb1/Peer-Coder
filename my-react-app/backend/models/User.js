const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

handle: { type: String, unique: true, required: true },
password: { type: String, required: true },
online: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', UserSchema);