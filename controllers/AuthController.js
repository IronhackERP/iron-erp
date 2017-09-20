const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')
const passport = require('passport')

module.exports = {
  get: (req, res, next) => {
    User.find({})
    .then(users => {
      res.render('users/show', {users})
    })
    .catch(err => console.log('ERROR'))
  },
  post: passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true,
    passReqToCallback: true
  }),
  get_logout: (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/')
    })
  }
}