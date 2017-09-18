const express = require('express');
const router  = express.Router();
const authRouter = require('../controllers/auth-controller')
const PATHS = require('./paths')

router.get(PATHS.LOGIN_PATH, authRouter.get)
router.post(PATHS.LOGIN_PATH, authRouter.post)
router.get(PATHS.NEW_USER, authRouter.get_new)
router.post(PATHS.NEW_USER, authRouter.post_new)

module.exports = router;
