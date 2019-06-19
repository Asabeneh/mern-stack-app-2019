const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = process.env.secretOrKey;
module.exports = passport => {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload)
    User.findOne({ _id: jwt_payload.id},function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  }));
};

