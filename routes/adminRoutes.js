// backend/routes/adminRoutes.js
const express = require('express');
const passport = require('passport');
const venueController = require('../controllers/venueController');

const router = express.Router();

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  } else {
    return res.status(403).json({ message: 'Access denied. Only admin users allowed.' });
  }
};

// Create a new venue
router.post('/venues', passport.authenticate('jwt', { session: false }), isAdmin, venueController.createVenue);

// Update a venue
router.put('/venues/:id', passport.authenticate('jwt', { session: false }), isAdmin, venueController.updateVenue);

// Delete a venue
router.delete('/venues/:id', passport.authenticate('jwt', { session: false }), isAdmin, venueController.deleteVenue);

// Get a single venue
router.get('/venues/:id', passport.authenticate('jwt', { session: false }), isAdmin, venueController.getVenue);

// Get all venues
router.get('/venues', passport.authenticate('jwt', { session: false }), isAdmin, venueController.getAllVenues);

module.exports = router;
