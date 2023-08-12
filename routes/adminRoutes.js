// backend/routes/adminRoutes.js
const express = require('express');
const passport = require('passport');
const venueController = require('../controllers/venueController');
const passportConfig = require('../config/passportConfig');


const router = express.Router();

// Middleware to check if the user is an admin
// const isAdmin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     return next();
//   } else {
//     return res.status(403).json({ message: 'Access denied. Only admin users allowed.' });
//   }
// };
const isAdmin = (req, res, next) => {
  // console.log('isAdmin middleware triggered');
  if (req.user && req.user.isAdmin) {
    return next();
  } else {
    console.log('Access denied. User is not an admin.');
    return res.status(403).json({ message: 'Access denied. Only admin users allowed.' });
  }
};


// // Create a new venue
// router.post('/venues', passport.authenticate('jwt', { session: false }), isAdmin, venueController.createVenue);
// backend/routes/adminRoutes.js
// ...
router.post('/venues', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  // console.log('User:', req.user); // Check if user is available
  venueController.createVenue(req, res);
});


// Update a venue
router.put('/venues/:id', passport.authenticate('jwt', { session: false }), isAdmin, venueController.updateVenue);

// Delete a venue
router.delete('/venues/:id', passport.authenticate('jwt', { session: false }), isAdmin, venueController.deleteVenue);

// Get a single venue
router.get('/venues/:id', venueController.getVenue);

// Get all venues
router.get('/venues', venueController.getAllVenues);

module.exports = router;
