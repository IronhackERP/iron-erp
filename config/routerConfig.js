module.exports = (app) => {
  const indexRoute = require('../routes/index')
  const authRoutes = require('../routes/auth')
  const userRoutes = require('../routes/user')
  const dashboardRoute = require('../routes/dashboard')
  const productRouter = require('../routes/product')
  // const supplierRouter = require('./routes/suppliers')
  const clientRouter = require('../routes/client')
  
  app.use(indexRoute)
  app.use(authRoutes)
  app.use(userRoutes)
  app.use(dashboardRoute)
  app.use(productRouter)
  // app.use(supplierRouter)
  app.use(clientRouter)
}