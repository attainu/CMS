const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
dotenv.config()
require('./db')
require('./passport')
const app = express()

app.use(express.json())
app.use(passport.initialize())

app.use(require('./routers/apiRoutes/adminApiRoutes'))
app.use(require('./routers/apiRoutes/userApiRoutes'))
app.use(require('./routers/normalRoutes/adminNormalRoues'))
app.use(require('./routers/normalRoutes/userNormalRoutes'))
app.use(require('./routers/apiRoutes/productApiRoutes'))
app.use(require('./routers/apiRoutes/trainerApiRoutes'))
app.use(require('./routers/normalRoutes/trainerNormalRoutes'))

app.get('/', (_, res)=>{res.status(200).json({Hey: 'Your project is gonna be awesome....!!!!!!!' })})

module.exports = app