module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: 'http://localhost:8000',
    DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/one-trips',
  }