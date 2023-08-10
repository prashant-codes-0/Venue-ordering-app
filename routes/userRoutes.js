// backend/routes/userRoutes.js
const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

// User signup
router.post('/signup', userController.signup);

// User login
router.post('/login', userController.login);

// User booking a venue
router.post('/book-venue', passport.authenticate('jwt', { session: false }), userController.bookVenue);

module.exports = router;
