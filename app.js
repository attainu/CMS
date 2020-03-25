const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
dotenv.config()
require('./db')
require('./passport')
const app = express()

app.use(express.json())
app.use(passport.initialize())

app.use(require('./routes/apiRoutes/adminApiRoutes'))

app.get('/', (_, res)=>{res.status(200).json({Hey: 'Your project is gonna be awesome....!!!!!!!' })})

module.exports = app