const express = require('express');
const router  = express.Router();
const supplierRouter = require('../controllers/SupplierController')
router.get('/suppliers', supplierRouter.get)
router.get('/suppliers/new', supplierRouter.getNew)
router.post('/suppliers/new', supplierRouter.postNew)
router.get('/suppliers/:id/edit', supplierRouter.getEdit)
router.post('/suppliers/:id/edit', supplierRouter.postEdit)
router.get('/suppliers/:id/delete', supplierRouter.delete)

module.exports = router
