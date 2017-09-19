module.exports = (app) => {
  const indexRouter = require('../routes/index')
  const authRouter = require('../routes/auth')
  const userRouter = require('../routes/user')
  const dashboardRouter = require('../routes/dashboard')
  const supplierRouter = require('../routes/supplier')
  // const clientRouter = require('../routes/client')

  app.use(indexRouter)
  app.use(authRouter)
  app.use(userRouter)
  app.use(dashboardRouter)
  app.use(supplierRouter)
  // app.use(clientRouter)
}
