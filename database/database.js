const mysql = require('mysql');
const { promisify } = require('util');
const { config } = require('../config')

const pool = mysql.createPool(config.database);

pool.getConnection((err, connection) => {
    if(connection) {
        connection.release();
        console.log('Database yes!');
        return;
    } else {
        console.error('DATABASE ERROR!!', err);
    }
})

pool.query = promisify(pool.query);

module.exports = pool;