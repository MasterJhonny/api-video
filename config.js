require('dotenv').config();

const config = {
    port: process.env.PORT || 3300,
    database: {
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'video',
        name: process.env.DB_NAME || 'data-video',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
    }
}

module.exports = { config };