module.exports = {
    PORT: process.env.PORT || 8000,
    //PORT: 1337,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: 'http://localhost:3000',
    DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/one-trips',
  }