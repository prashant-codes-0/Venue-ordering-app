// backend/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venue',
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  // You can add more fields related to the booking details
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
