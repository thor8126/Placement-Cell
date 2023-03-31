const express = require('express');
const app = express();
const router = express.Router();
const isAuthenticated = require('../config/isAuthenticated')

router.get('/',isAuthenticated ,(req, res) => {
    const data = req.user;
    res.render('Home', { title: 'Home', layout: 'base1',data });
  });


router.get('/login', function(req, res) {
    if(req.user){
      res.redirect('/')
    }
    res.render('Login', { title: 'Login',layout:'base2' });
  });

  router.get('/dashboard', isAuthenticated, (req, res) => {
    const data = req.user;
    res.render('Dashboard', { title: 'Dashboard', layout: 'base1',data });
  });
  
  


module.exports = router;