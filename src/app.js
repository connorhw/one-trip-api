require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const app = express()
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
const tripsRouter = require('./trips/trips-router')

app.use(morgan(morganSetting))
app.use(cors())
app.use(helmet())
app.use(express.json())
//const cors = require('cors');
//const {CLIENT_ORIGIN} = require('./config');

/*
app.get('/trips', (req, res, next) => {
   res.send('All Trips')
})
*/
app.use('/api/trips', tripsRouter)

/*
app.get('/', (req, res) => {
    res.send('Hello, world!')
})
*/

app.use(function errorHandler(error, req, res, next) {
   let response
   //if (process.env.NODE_ENV === 'production') {
   if (NODE_ENV === 'production') {
     response = { error: { message: 'server error' } }
   } else {
     console.error(error)
     response = { message: error.message, error }
   }
   res.status(500).json(response)
 })

module.exports = app