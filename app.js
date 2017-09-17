const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressLayout = require('express-ejs-layouts')
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGO_URI)
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main')
app.use(expressLayout)
app.locals.title = 'IronERP'
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
const indexRoute = require('./routes/index')
const authRoutes = require('./routes/auth')
app.use(indexRoute)
app.use(authRoutes)
require('./config/error_404.js')
require('./config/errors.js')

module.exports = app