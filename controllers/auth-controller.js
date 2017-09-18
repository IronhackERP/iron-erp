const PATHS = require('../routes/paths')
const passport = require('passport')

module.exports = {
  get: (req, res, next) => {
    res.render('index')
  },
  post: passport.authenticate('local', {
    successRedirect: PATHS.DASHBOARD_PATH,
    failureRedirect: PATHS.ROOT_PATH,
    failureFlash: true,
    passReqToCallback: true
  }),
  put: (req, res, next) => {

  },
  delete: (req, res, next) => {
    
  }
}