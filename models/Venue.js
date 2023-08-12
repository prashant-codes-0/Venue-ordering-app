// backend/models/Venue.js
const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  availableDates: [Date],
  area: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
