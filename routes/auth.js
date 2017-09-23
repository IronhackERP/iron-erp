const express = require('express');
const router  = express.Router();
const authController = require('../controllers/AuthController')
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/users', ensureLoggedIn('/'), authController.user)
router.post('/login', authController.login)
router.get('/logout', ensureLoggedIn('/'), authController.logout)

module.exports = router;
