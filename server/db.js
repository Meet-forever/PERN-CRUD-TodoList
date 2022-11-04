const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: `${process.env.LOCAL_PASSWORD}`,
    host: 'localhost',
    port: 5432,
    database: `${process.env.LOCAL_DATABASE}`
});

module.exports = pool;
