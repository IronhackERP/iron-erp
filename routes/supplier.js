const express = require('express');
const router  = express.Router();
const supplierRouter = require('../controllers/SupplierController')
router.get('/suppliers', supplierRouter.get)
router.get('/suppliers/new', supplierRouter.get_new)
router.post('/suppliers/new', supplierRouter.post_new)

module.exports = router
