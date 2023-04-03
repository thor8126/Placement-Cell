const express = require('express');
const app = express();
const router = express.Router();
const isAuthenticated = require('../config/isAuthenticated')
const flash = require('connect-flash');

router.get('/',isAuthenticated ,(req, res) => {
    const data = req.user;
    res.render('Home', { flash: req.flash(),title: 'Home', layout: 'base1',data });
  });



router.get('/login', function(req, res) {
    if(req.user){
      req.flash('success', 'You are already logged in');
      res.redirect('/')
    }
    res.render('Login', { flash: req.flash(),title: 'Login',layout:'base2' });
  });

router.get('/add_student', isAuthenticated, (req, res) => {
  const data = req.user;
  res.render('Add Student', {flash: req.flash(), title: 'Add Student', layout: 'base1',data });
});


module.exports = router;