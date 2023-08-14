// backend/config/passportConfig.js
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config=require('./config')

const User = require('../models/User'); //  the path to  User model

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET //  JWT secret key 
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
