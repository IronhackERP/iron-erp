const express = require('express')
const router  = express.Router()
const dashboardRouter = require('../controllers/DashboardController')
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/dashboard', ensureLoggedIn('/'), dashboardRouter.get)

module.exports = router
