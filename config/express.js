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
const debug = require('debug')("app:" + path.basename(__filename).split('.')[0])

module.exports = function (app) {

  if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
  }
  mongoose.Promise = global.Promise
  mongoose.connect(process.env.MONGO_URI)
    .then('Connected to DB')

  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'ejs')
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, '../public')))
  app.set('layout', 'layouts/main')
  app.use(expressLayout)

  app.use(session({
    secret: "IronERP",
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  }))

  app.use(flash())
  require('../passport/serializers')
  require('../passport/local')
  app.use(passport.initialize())
  app.use(passport.session())

  app.use(function (req, res, next) {
    res.locals.user = req.user
    res.locals.title = 'Client Management'
    next()
  })

}
