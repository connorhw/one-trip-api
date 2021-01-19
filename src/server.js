const app = require('./app')
const cors = require('cors')
const {CLIENT_ORIGIN} = require('./config')
const knex = require('knex')
//const {DB_URL} = require('./config')
const { PORT, DB_URL } = require('./config')
//const { PORT } = require('./config')

const db = knex({
  client: 'pg',
  connection: DB_URL,
})
app.use(cors())
/*
app.use(
  cors({
      origin: CLIENT_ORIGIN
  })
);
*/
app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} for one-trip-api.`)
})