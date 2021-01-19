const path = require('path')
const express = require('express')
//const xss = require('xss')
const TripsService = require('./trips-service')
const {serializeTrips} = require('./trips-service')

const tripsRouter = express.Router()
const jsonParser = express.json()

tripsRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        TripsService.getAllTrips(knexInstance)
            .then(trips => {
                console.log(serializeTrips)
                res.json(trips.map(serializeTrips))
            })
            .catch(next)
    })

    module.exports = tripsRouter