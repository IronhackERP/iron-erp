require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

const Client = require('../models/Client')
const Supplier = require('../models/Supplier')
const Product = require('../models/Product')
const User = require('../models/User')

const password = '123'
const salt = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err))

const supplier = new Supplier({
  name: 'supplier1',
  companyName: 'YOQUESE',
  phoneNumber: 111111111,
  email: 'supplier1@gmail.com',
})

const products = new Product([{
  name: 'Coca-Cola Zero',
  price: 0.99,
  description: 'Coke',
  supplier: supplier._id
}])

const user = [{
  username: 'Lolo',
  email: 'lolo@lolo',
  password: hashPass
}]



Supplier.create(supplier)
.then(supplier => {
  return Product.create(products)
})
.then(products => {
  return User.create(user)
}).then(user => {
  const userID = user[0]._id
  const client = [{
    firstName: 'Pepe',
    lastName: 'Leches',
    email: 'a@a',
    address: 'Calle la espina',
    amount: parseInt(98),
    phoneNumber: parseInt(889955),
    productsList: products._id,
    employeeVendor: userID
  }]
  // client[0].productsList = [products._id]
  // client[0].employeeVendor = [user._id]
  return Client.create(client) 
})
.then(() => mongoose.connection.close())
.catch(err => console.log(err))

