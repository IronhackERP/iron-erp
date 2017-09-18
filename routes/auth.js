const express = require('express');
const router  = express.Router();
const authRouter = require('../controllers/auth-controller')
const PATHS = require('./paths')

router.get(PATHS.LOGIN_PATH, authRouter.get)
router.post(PATHS.LOGIN_PATH, authRouter.post)

module.exports = router;
