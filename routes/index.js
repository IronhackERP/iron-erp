const express = require('express')
const router  = express.Router()
const indexRouter = require('../controllers/index-controller')
const PATHS = require('./paths')

router.get(PATHS.ROOT_PATH, indexRouter.get)

module.exports = router
