const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController')
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/products', ensureLoggedIn('/'), productController.allProducts)
router.get('/products/new', ensureLoggedIn('/'), productController.product)
router.post('/products/new', ensureLoggedIn('/'), productController.newProduct)
router.get('/products/:id/edit', ensureLoggedIn('/'), productController.getEdit)
router.post('/products/:id/edit', ensureLoggedIn('/'), productController.postEdit)
router.get('/products/:id/delete', ensureLoggedIn('/'), productController.delete)

module.exports = router