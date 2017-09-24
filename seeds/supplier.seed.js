const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

const Supplier = require('../models/Supplier')

const suppliers = [{
    name: 'supplier1',
    companyName: 'YOQUESE',
    phoneNumber: 111111111,
    email: 'supplier1@gmail.com',
  },
  {
    name: 'Juan Palomo',
    companyName: 'CARRETILLA',
    phoneNumber: 222222222,
    email: 'supplier2@gmail.com',
  },
  {
    name: 'Lucas Grijander',
    companyName: 'SAMSUNG',
    phoneNumber: 222222222,
    email: 'supplier2@gmail.com',
  },
  {
    name: 'La bruja Lola',
    companyName: 'VELITAS-NEGRAS.SL',
    phoneNumber: 333333333,
    email: 'supplier2@gmail.com',
  },
  {
    name: 'Fran Kestein',
    companyName: 'REPUESTOS FRAN.SA',
    phoneNumber: 444444444,
    email: 'supplier2@gmail.com',
  }
]

Supplier.create(suppliers, (err, docs) => {
  if (err) {
    throw err
  }
  docs.forEach((supplier) => {
    console.log(supplier.name)
  })
  mongoose.connection.close()
})
