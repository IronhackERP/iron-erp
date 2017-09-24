const Product = require('../models/Product')
const Supplier = require('../models/Supplier')


module.exports = {
  allProducts: (req, res, next) => {
    Product.find({}).populate('supplier')
      .then(products => {
          res.render('products/show', {
            title: 'Products list',
            products
          })
      })
      .catch(err => next(err))
  },
  product: (req, res, next) => {
    Supplier.find({})
      .then(suppliers => {
        res.render('products/new', {
          title: 'New Product',
          suppliers
        })
      })
      .catch(err => next(err))
  },
  newProduct: (req, res, next) => {
    Supplier.find({}).then(suppliers => {
      const name = req.body.name
      const price = parseFloat(req.body.price).toFixed(2)
      const description = req.body.description
      const supplier = [req.body.supplierID]
      if (name === '' && price === '' && description === '' && supplier === '') {
        res.render('products/new', {
          message: 'Inputs can\'t be empty',
          suppliers
        })
      }
      Product.findOne({
        name
      }, 'name', (err, product) => {
        if (product !== null) {
          res.render('products/new', {
            message: 'The product already exist',
            suppliers
          })
          return
        }

        const newProd = new Product({
            name,
            price,
            description,
            supplier
          }).save()
          .then(product => res.redirect('/products'))
          .catch(err => next(err))
      })
    }).catch(err => next(err))
  },
  getEdit: (req, res, next) => {
    Product.findById(req.params.id).populate('supplier', ['name'])
    .then(selectedProduct => {
      res.render('products/edit', {
        title: 'Edit product',
        selectedProduct,
        message: ''
      })
    }).catch(err => next(err))
  },
  postEdit: (req, res, next) => {
    Product.find({})
      .then(products => {
        const product = {
          name: req.body.name,
          price: parseFloat(req.body.price).toFixed(2),
          description: req.body.description,
        }
        Product.findByIdAndUpdate({
            _id: req.params.id
          }, {
            $set: {
              'name': product.name,
              'price': product.price,
              'description': product.description
            }
          })
          .then((updatedProduct, products)=> {
            res.redirect('/products')
          })
      })
  },
  delete: (req, res, next) => {
    const prodID = req.params.id

    Product.findByIdAndRemove(prodID)
      .then(() => {
        return res.redirect('/products')
      })
      .catch(err => {
        next(err)
      })
  }
}