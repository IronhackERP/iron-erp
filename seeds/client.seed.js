require('dotenv').config()
const mongoose = require('mongoose')
const Client = require('../mondels/Client')
const Supplier = require('../models/Supplier')
const User = require('../models/User')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB'))
  .catch(err => next(err))
