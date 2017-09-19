const app = require('express')()

require('./config/express')(app)

const indexRoute = require('./routes/index')
const authRoutes = require('./routes/auth')
const dashboardRoute = require('./routes/dashboard')

app.use(indexRoute)
app.use(authRoutes)
app.use(dashboardRoute)

require('./config/error_404.js')
require('./config/errors.js')

module.exports = app
