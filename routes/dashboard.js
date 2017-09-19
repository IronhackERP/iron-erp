const express = require('express')
const router  = express.Router()
const dashboardRouter = require('../controllers/DashboardController')

router.get('/dashboard', dashboardRouter.get)

module.exports = router
