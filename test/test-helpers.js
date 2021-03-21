const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      full_name: 'Test user 1',
      nickname: 'TU1',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      full_name: 'Test user 2',
      nickname: 'TU2',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      full_name: 'Test user 3',
      nickname: 'TU3',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      full_name: 'Test user 4',
      nickname: 'TU4',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ]
}

function makeTripsFixtures() {
    const testUsers = makeUsersArray()
    //const testThings = makeThingsArray(testUsers)

    return { testUsers/*, testThings*/ }
  }
  
function cleanTables(db) {
return db.raw(
    `TRUNCATE
    trips_table,
    trips_users,
    RESTART IDENTITY CASCADE`
)
}

function seedUsers(db, users) {
    const preppedUsers = users.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10)
    }))
    return db.into('trips_users').insert(preppedUsers)
      .then(() => 
        //update the auto sequence to stay in sink
        db.raw(
          `SELECT setval('trips_users_id_seq', ?)`,
          [users[users.length - 1].id],
        )
      )
  }

  function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
    const token = jwt.sign({ user_id: user.id }, secret, {
        subject: user.user_name,
        algorithm: 'HS256',
     })
     return `Bearer ${token}`
}

module.exports = {
    makeUsersArray,
    makeAuthHeader,
    makeTripsFixtures,
    seedUsers,
}