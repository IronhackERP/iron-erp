const express = require('express');
const router  = express.Router();
const authRouter = require('../controllers/AuthController')
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/users', ensureLoggedIn('/'), authRouter.get)
router.post('/login', authRouter.post)
router.get('/logout', ensureLoggedIn('/'), authRouter.get_logout)

module.exports = router;
