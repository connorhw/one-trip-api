const xss = require('xss')

const TripsService = {
    getAllTrips(knex) {
        return knex.select('*').from('trips_table')
    },
    serializeTrips(trip) {
        return {
            id: trip.id,
            trip_name: xss(trip.trip_name),
            places: trip.places,
            fav_part: trip.fav_part,
            cost: trip.cost,
            journal: trip.journal,
        }
    },
}

module.exports = TripsService