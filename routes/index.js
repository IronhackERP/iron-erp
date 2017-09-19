const express = require('express')
const router  = express.Router()
const indexRouter = require('../controllers/IndexController')

router.get('/', indexRouter.get)

module.exports = router
