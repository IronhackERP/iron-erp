const express = require('express')
const router  = express.Router()
const indexRouter = require('../controllers/IndexController')
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

router.get('/', ensureLoggedOut('/dashboard'), indexRouter.get)

module.exports = router
