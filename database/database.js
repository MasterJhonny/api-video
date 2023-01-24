const { createPool } = require('mysql2/promise');

const { config } = require('../config');

const pool = createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
    port: config.database.port
});

pool.getConnection((err, connection) => {
    if(connection) {
        connection.release();
        console.log('Database yes!');
        return;
    } else {
        console.error('DATABASE ERROR!!', err);
    }
})

module.exports = pool;
