const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

const password = '123'
const salt = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const users = [
  {
    username: 'Admin',
    firstName: 'José',
    lastName: 'Pérez',
    email: 'admin1@gmail.com',
    password: hashPass,
    rol:'admin'
  }
];

User.create(users)
  .then(users => {
    users.forEach(user => console.log(`${user.username} created`))
    console.log('Data created properly...');
    mongoose.disconnect();
  })
  .catch(err => {
    console.log(`ERROR -> ${err}`);
    throw err;
  });
