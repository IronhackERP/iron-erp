const express = require('express');
const router  = express.Router();
const authRouter = require('../controllers/auth-router')
const PATHS = require('./paths')

router.get(PATHS.LOGIN_PATH, authRouter.login)

module.exports = router;
