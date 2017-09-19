const express = require('express');
const router  = express.Router();
const userRouter = require('../controllers/UserController')
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/users/new', ensureLoggedIn('/'), userRouter.get)
router.post('/users/new', ensureLoggedIn('/'), userRouter.post)
router.get('/users/:id/edit', ensureLoggedIn('/'), userRouter.get_edit)
router.post('/users/:id/edit', ensureLoggedIn('/'), userRouter.put)
router.get('/users/:id/delete', ensureLoggedIn('/'), userRouter.delete)

module.exports = router;
