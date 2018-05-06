const bcrypt = require('bcrypt')
const bcryptSalt = 10
const User = require('../models/User')

module.exports = {
  get: (req, res, next) => {
    res.render('users/new', {
      title: 'List of Users'
    })
  },
  post: (req, res, next) => {
    const { username, firstName, lastName, password, email, rol } = req.body
  
    if (username === '' && password === '') {
      res.render('users/new', {
        message: 'Indicate username and password'
      })
    }

    User.findOne({
      username
    }, 'username', (err, user) => {
      if (user !== null) {
        res.redirect('/users')
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)
      const newUser = new User({
          username,
          firstName,
          lastName,
          password: hashPass,
          email,
          rol
        })
        .save()
        .then(user => res.redirect("/users"))
        .catch(err => next("error"))
    })
  },
  getEdit: (req, res, next) => {
    User.findById(req.params.id)
      .then(selectedUser => res.render('users/edit', {
        selectedUser
      }))
      .catch(err => next(err))
  },
  postEdit: (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: {
          username: req.body.user,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email
        }
      })
      .then(() => res.redirect('/users'))
      .catch(err => next(err))
  },
  delete: (req, res, next) => {
    const userID = req.params.id

    User.findByIdAndRemove(userID)
      .then(() => res.redirect('/users'))
      .catch(err => next(err))
  }
}