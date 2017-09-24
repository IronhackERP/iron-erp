const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require('bcrypt')
const bcryptSalt = 10

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB!'))
  .catch(err => next(err))

const Supplier = require('../models/Supplier')
const Product = require('../models/Product')

const password = '123'
const salt = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const supplier = new Supplier({
  name: 'supplier1',
  companyName: 'YOQUESE',
  phoneNumber: 111111111,
  email: 'supplier1@gmail.com',
})

const products = new Product({
  name: 'Coca-Cola Zero',
  price: 0.99,
  description: 'The amazing Coca-Cola Zero, without Sugar!!!',
  supplier: supplier._id
}, {
  name: 'Coca-Cola Normal',
  price: 0.99,
  description: 'The amazing Coca-Cola Zero, without Sugar!!!',
  supplier: supplier._id
}, {
  name: 'Coca-Cola Cherry',
  price: 0.99,
  description: 'The amazing Coca-Cola Zero, without Sugar!!!',
  supplier: supplier._id
})


Supplier.create(supplier)
  .then(supplier => {
    return Product.create(products)
  })
  .then(() => {
    console.log("terminado")
    mongoose.connection.close()
  })
  .catch(err => console.log(err))