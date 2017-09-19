module.exports = (app) => {
  const indexRoute = require('../routes/index')
  const authRoutes = require('../routes/auth')
  const userRoutes = require('../routes/user')
  const dashboardRoute = require('../routes/dashboard')
  // const supplierRouter = require('./routes/suppliers')
  // const clientRouter = require('./routes/clients')
  
  app.use(indexRoute)
  app.use(authRoutes)
  app.use(userRoutes)
  app.use(dashboardRoute)
  // app.use(supplierRouter)
  // app.use(clientRouter)
}