const express = require('express');
const router  = express.Router();
const supplierRouter = require('../controllers/SupplierController')
router.get('/suppliers', supplierRouter.get)
router.get('/suppliers/new', supplierRouter.get_new)
router.post('/suppliers/new', supplierRouter.post_new)
router.get('/suppliers/:id/edit', supplierRouter.get_edit)
router.post('/suppliers/:id/edit', supplierRouter.put)
//router.get('/suppliers/:id/delete', supplierRouter.delete)

module.exports = router
