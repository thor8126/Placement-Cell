const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("../config/passportLocal");

// Register controller
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
          console.log('User already exists')
          req.flash('error','User already exists')
          return res.redirect('/login')
        }
        if (password.length < 6) {
          console.log('Password must be at least 6 characters.')
          req.flash('error','Password must be at least 6 characters...')
            return res.redirect('/login')
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
            role:'user'
        });
        await newUser.save();
        req.flash('success','User created succesfully!')
        res.redirect('/login')
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

// Login controller
exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err);
     }
    if (!user) { 
      req.flash('error','User not found!')
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      req.flash('success','Logged In !')
      return res.redirect('/')
    });
  })(req, res, next);
};

// Logout controller
exports.logout = function(req, res) {
    req.logout(function (err) {
        if (err) {
          console.log(err);
        }
        req.session.destroy(function (err) {
          if (err) {
            console.log(err);
          }
          res.clearCookie('connect.sid');
          res.redirect('/');
        });
      });
};

