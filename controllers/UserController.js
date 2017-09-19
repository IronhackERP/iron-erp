const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')

module.exports = {
  get: (req, res, next) => {
    res.render('users/new')
  },
  post: (req, res, next) => {
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
  get_edit: (req, res, next) => {
    const userID = req.params.id

    console.log(req.user)

    User.find(userID)
      .then(user => {
        console.log(user)
        res.render(`/users/${userID}/edit`, {
          user
        })
      })
  },
  put: (req, res, next) => {

  },
  delete: (req, res, next) => {
    const userID = req.params.id
    console.log(userID)

    User.findByIdAndRemove(userID, (err, user) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/users');
    })
  }
}