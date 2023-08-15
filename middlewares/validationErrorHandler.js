
const { validationResult } = require('express-validator');
// middleware/validationErrorHandler.js
exports.handleValidationErrors = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
      const errors = err.errors.map(error => error.msg);
      return res.status(400).json({ message: 'Validation errors', errors });
    }
    return next(err);
  };
  