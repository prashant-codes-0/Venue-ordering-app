// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors'); // Import the cors package
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const config =require('./config/config')
const app = express();

// Use the cors middleware
app.use(cors());

// Body parsing middleware
app.use(express.json());



// Initialize Passport and use the Passport JWT strategy
app.use(passport.initialize());
require('./config/passportConfig');

// Use userRoutes and adminRoutes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Venue Booking App');
});
// Connect to MongoDB
mongoose.connect(config.mongo_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Start the server
const port = 5555;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
