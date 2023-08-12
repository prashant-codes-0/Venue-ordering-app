// backend/controllers/venueController.js
const Venue = require('../models/Venue');

// Controller for creating a new venue
exports.createVenue = async (req, res) => {
  try {
    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admin can create venues.' });
    }

    const newVenue = new Venue(req.body);
    await newVenue.save();

    res.status(201).json(newVenue);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while creating the venue.' });
  }
  
};

// Controller for updating a venue
exports.updateVenue = async (req, res) => {
  try {
    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admin can update venues.' });
    }

    const updatedVenue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedVenue) {
      return res.status(404).json({ message: 'Venue not found.' });
    }

    res.status(200).json(updatedVenue);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the venue.' });
  }
};

// Controller for deleting a venue
exports.deleteVenue = async (req, res) => {
  try {
    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admin can delete venues.' });
    }

    const deletedVenue = await Venue.findByIdAndDelete(req.params.id);

    if (!deletedVenue) {
      return res.status(404).json({ message: 'Venue not found.' });
    }

    res.status(200).json({ message: 'Venue deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the venue.' });
  }
};

// Controller for getting a single venue by ID
exports.getVenue = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);

    if (!venue) {
      return res.status(404).json({ message: 'Venue not found.' });
    }

    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching the venue.' });
  }
};

// Controller for getting all venues
exports.getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find();

    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching venues.' });
  }
};
