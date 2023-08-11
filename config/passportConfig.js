// backend/config/passportConfig.js
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User'); // Modify the path to your User model

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'ABCD', // Set your JWT secret key here
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await User.findById(payload.sub);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);
