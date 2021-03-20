const app = require('./app')
const cors = require('cors')
//const {CLIENT_ORIGIN} = require('./config')
const knex = require('knex')
const { PORT, DB_URL } = require('./config')

require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: DB_URL,
})


app.use(
  cors({
      origin: process.env.CLIENT_ORIGIN
  })
);
console.log('here server here')
app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} for one-trip-api.`)
})