require('dotenv').config();

const config = {
    port: process.env.PORT || 6640,
    database: {
        connectionLimit: 1000,
        connectionTimeout: 60 * 60 *1000,
        acquireTimeout: 60 * 60 *1000,
        timeout: 60 * 60 *1000,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME
    }
}

module.exports = { config };