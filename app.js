const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
require('./db')
const app = express()
app.use(express.json())

app.use(require('./routes/apiRoutes/adminApiRoutes'))

app.get('/', (_, res)=>{res.status(200).json({Hey: 'Your project is gonna be awesome....!!!!!!!' })})

module.exports = app