// middleware/validationMiddleware.js
const { body } = require('express-validator');


// Define your validation middleware functions
exports.validateSignup = [
  // Define your validation rules here using express-validator methods
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('isAdmin').isBoolean().withMessage('isAdmin should be a boolean value'),
];

exports.validateLogin = [
  // Define your validation rules here using express-validator methods
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

exports.validateBooking = [
  // Define your validation rules for booking here using express-validator methods
];
