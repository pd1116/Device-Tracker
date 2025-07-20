const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  emp_id:Number,
  id: Number,
  name: String,
  email: String,
  deviceName: String, 
  location: String,
  seriesNo: String,
  platform: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', userSchema);
