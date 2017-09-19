const express = require('express');
const router  = express.Router();
const authRouter = require('../controllers/AuthController')

router.get('/users', authRouter.get)
router.post('/login', authRouter.post)
router.get('/logout', authRouter.get_logout)
router.get('/users/new', authRouter.get_new)
router.post('/users/new', authRouter.post_new)

module.exports = router;
