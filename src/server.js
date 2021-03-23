const app = require('./app')
const cors = require('cors')
//const {CLIENT_ORIGIN} = require('./config')
const knex = require('knex')
//const { PORT } = require('./config')

require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})


app.use(
  cors({
      origin: process.env.CLIENT_ORIGIN
  })
);
app.set('db', db)

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} for one-trip-api.`)
})