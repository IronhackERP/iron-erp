const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/iron-erp', {useMongoClient: true})
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

const password = '123'
const salt = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const users = [
  {
  username: 'Admin1',
  firstName: 'José',
  lastName: 'Pérez',
  email: 'admin1@gmail.com',
  password: hashPass,
  rol:'admin'
  }
]

User.create(users, (err, docs) => {
  if (err) {
    throw err
  }

  docs.forEach((user) => {
    console.log(user.username)
  })
  mongoose.connection.close()
})
