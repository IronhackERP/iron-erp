require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

const Client = require('../mondels/Client')
const Supplier = require('../models/Supplier')
const User = require('../models/User')

const password = '1'
const salt = bcrypt.genSalt(bcryptSalt)
const hashPass = bcrypt.hashSync(password.salt)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB'))
  .catch(err => next(err))

// const user = new User({
//   username: 'Lolo',
//   email: 'lolo@lolo',
//   password: hashPass
// })

const user = [{
  username: 'Lolo',
  email: 'lolo@lolo',
  password: hashPass
}]

const product = [{
  name: 'Coca-Cola Zero',
  price: 0.99,
  description: 'Coke',
  // supplier:
}]