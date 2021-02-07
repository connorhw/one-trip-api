const xss = require('xss')

const TripsService = {
    getAllTrips(knex) {
        return knex.select('*').from('trips_table')
    },
    getById(knex, id) {
        return knex
            .from('trips_table')
            .select('*')
            .where('id', id)
            .first()
    },
    insertTrip(knex, newTrip) {
        return knex
            .insert(newTrip)
            .into('trips_table')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    deleteTrip(knex, id) {
        return knex('trips_table')
            .where({ id })
            .delete()
    },
    updateTrip(knex, id, newTripFields) {
        return knex('trips_table')
            .where({ id })
            .update(newTripFields)
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