
function isAuthenticated(req, res, next) {
    // Check whether user is authenticated here
    if (req.isAuthenticated()) {
      res.locals.isLoggedIn = true;
      return next(); // User is authenticated, allow request to proceed
    } else {
      res.locals.isLoggedIn = false;
      res.redirect('/login'); // User is not authenticated, redirect to login page
    }
  }
  

module.exports = isAuthenticated;