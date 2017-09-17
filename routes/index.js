const express = require('express');
const router  = express.Router();
const indexRouter = require('../controllers/index-router')
const PATHS = require('./paths')

router.get(PATHS.ROOT_PATH, indexRouter.index);

module.exports = router;
