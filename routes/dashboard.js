const express = require('express')
const router  = express.Router()
const storehouseRouter = require('../controllers/storehouse-controller')
const PATHS = require('./paths')

router.get(PATHS.DASHBOARD_PATH, storehouseRouter.get)

module.exports = router
