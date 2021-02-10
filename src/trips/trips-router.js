const path = require('path')
const express = require('express')
//const xss = require('xss')
const TripsService = require('./trips-service')
const {serializeTrips} = require('./trips-service')

const tripsRouter = express.Router()
const jsonParser = express.json()

serializeTrip = trip => ({
    id: trip.id,
    trip_name: trip.trip_name,
    places: trip.places,
    fav_part: trip.fav_part,
    journal: trip.journal,
})

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
    .post(jsonParser, (req, res, next) => {
        const { trip_name, places, fav_part, journal } = req.body
        const newTrip = { trip_name, places, fav_part, journal }

        for(const [key, value] of Object.entries(newTrip))
            if (value == null)
                return res.status(400).json({
                    error: { message: `You are missing '${key}' in request body` }
                })
        TripsService.insertTrip(
            req.app.get('db'),
            newTrip
        )
            .then(trip => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${trip.id}`))
                    .json(serializeTrip(trip))
            })
            .catch(next)
    })

tripsRouter
    .route('/:id')
    //.all(requireAuth)
    .all((req, res, next) => {
        TripsService.getById(
            req.app.get('db'),
            req.params.id
        )
            .then(trip => {
                if(!trip) {
                    return res.status(404).json({
                        error: { message: `Trip does not exist`}
                    })
                }
                res.trip = trip
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(serializeTrip(res.trip))
    })
    .delete((req, res, next) => {
        TripsService.deleteTrip(
            req.app.get('db'),
            req.params.id
        )
        .then(numRowsAffected => {
            res.status(204).end()
        })
        .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { trip_name, places, fav_part, journal } = req.body
        const tripToUpdate = { trip_name, places, fav_part, journal }

        const numberOfValues = Object.values(tripToUpdate).filter(Boolean).length
        if (numberOfValues === 0)
            return res.status(400).json({
                error: {
                    message: `Request body must contain a new value for at least one of the trip page values`
                }
            })
        TripsService.updateTrip(
            req.app.get('db'),
            req.params.id,
            tripToUpdate
        )
        .then(numRowsAffected => {
            res.status(204).end()
        })
        .catch(next)
    })


module.exports = tripsRouter