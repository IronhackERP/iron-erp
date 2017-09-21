const app = require('express')()
require('./config/express')(app)
require('./config/routerConfig')(app)
require('./config/error_404.js')
require('./config/errors.js')

module.exports = app