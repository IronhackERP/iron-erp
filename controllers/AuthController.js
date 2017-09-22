const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')
const passport = require('passport')

module.exports = {
  user: (req, res, next) => {
    User.find({})
    .then(users => {
      res.render('users/show', {title: 'List of users', users})
    })
    .catch(err => console.log('ERROR'))
  },
  login: passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true,
    passReqToCallback: true
  }),
  logout: (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/')
    })
  }
}