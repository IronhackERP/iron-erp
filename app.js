const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressLayout = require('express-ejs-layouts')
const session = require("express-session")
const flash = require("connect-flash")
const passport = require('passport')
const MongoStore = require("connect-mongo")(session)
const debug = require('debug')("app:"+path.basename(__filename).split('.')[0])
mongoose.Promise = global.Promise
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGO_URI)
  .then('Connected to DB')
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main')
app.use(expressLayout)
app.use(session({
  secret: "IronERP",
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60  // 1 day
  })
}))
app.use(flash())  
app.locals.title = 'IronERP'
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
require('./passport/serializers')
require('./passport/local')
app.use(passport.initialize())
app.use(passport.session())
const indexRoute = require('./routes/index')
const authRoutes = require('./routes/auth')
const dashboardRoute = require('./routes/dashboard')
app.use(indexRoute)
app.use(authRoutes)
app.use(dashboardRoute)
require('./config/error_404.js')
require('./config/errors.js')

module.exports = app