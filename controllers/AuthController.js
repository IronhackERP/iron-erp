const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')
const passport = require('passport')

module.exports = {
  get: (req, res, next) => {
    res.render('users/show')
  },
  post: passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
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
     console.log(hashPass)
      const newUser = new User({
          username,
          password: hashPass,
          email,
          rol
        })
        .save()
        .then(user => res.redirect("/users"))
        .catch(err => console.log("error"))
    })
  },
  put: (req, res, next) => {

  },
  delete: (req, res, next) => {

  }
}