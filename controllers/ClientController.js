const Product = require('../models/Product')
const User = require('../models/User')
const Client = require('../models/Client')


module.exports = {
  allClients: (req, res, next) => {
    Product.find({}).populate('productsList')
      .then(product => {
        return User.find({})
      }).then(user => {
        return Client.find({}).populate('employeeVendor')
      }).then(clients => {
        res.render('clients/show', {
          clients,
          title: 'Lista de Clientes'
        })
      })


  },
  client: (req, res, next) => {
    let productsListSelect = ''
    Product.find({}).populate('supplier')
      .then(products => {
        productsListSelect = products
        return User.find({})
      }).then(users => {
        res.render('clients/new', {
          productsListSelect,
          users
        })
      })
  },
  newClient: (req, res, next) => {
    const client = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: parseInt(req.body.phoneNumber),
        productsList: req.body.productsList,
        employeeVendor: req.body.employeeVendor
      }).save()
      .then(() => res.redirect('/clients'))
      .catch(err => {
        console.log(client)
        next(err)
      })
  },
  getEditClient: (req, res, next) => {
    let clientID = req.params.id
    console.log(clientID)
    Client.findById(clientID).populate('productsList employeeVendor')
      .then(client => {
        console.log(client)
        res.render('clients/edit', {client, message: ''})
      })
      .catch(err => next(err))
  },
  postEditClient: (req, res, next) => {
    Client.findByIdAndUpdate(req.params.id, {$set: {firstName: req.body.firstName,
      lastName: req.body.lastName, email: req.body.email, address: req.body.address,
      phoneNumber: parseInt(req.body.phoneNumber)     
    }}).then(() => {
      res.redirect('/clients')
    }).catch(err => next(err))
  },
  deleteClient: (req, res, next) => {
    const clientID = req.params.id

    Client.findByIdAndRemove(clientID)
      .then(() => res.redirect('/clients'))
      .catch(err => next(err))
  }
}