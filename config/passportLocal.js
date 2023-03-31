const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // import user model

  // Local Strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        const user = User.findOne({ email: email }).then((user) => {
          if (!user) {
            return done(null, false);
          }
          bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null,false);
            }
          });
        });
      }
    )
  );

  // Serialize user
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser(function(id, done) {
    //send only the user id to the client
    User.findById(id)
      .then((user) => {
        const data = { id: user.id, username:user.username, email: user.email, role: user.role };
        done(null, data);
      })
      .catch((err) => {
        done(err, null);
      });
  });

  
  module.exports = passport;