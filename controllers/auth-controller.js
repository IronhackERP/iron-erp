const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')
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
  get_new: (req, res, next) => {
    res.render('users/new')
  },
  post_new: (req, res, next) => {
    const username = req.body.user
    const password = req.body.password
    const email = req.body.email
    const rol = req.body.rol

    if (username === '' && password === '') {
      res.render('users/new', {
        message: 'Indicate username and password'
      })
    }

    User.findOne({
      username
    }, 'username', (err, user) => {
      if (user !== null) {
        res.render('users/new', {
          message: 'The username already exists'
        })
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)

      const newUser = new User({
          username,
          password,
          email,
          rol
        })
        .save()
        .then(user => res.redirect(PATHS.DASHBOARD_PATH, {user: user}))
        .catch(err => res.redirect(PATHS.DASHBOARD_PATH, {
          message: err
        }))
    })
  },
  put: (req, res, next) => {

  },
  delete: (req, res, next) => {

  }
}