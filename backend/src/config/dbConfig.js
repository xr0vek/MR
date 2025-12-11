const { Pool } = require('pg')
require('dotenv').config()

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = decodeURIComponent(process.env.DB_PASSWORD);
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

if (!DB_USER || !DB_HOST || !DB_NAME || !DB_PORT || !DB_PASSWORD) {
console.log('Environment variables are not defined')
}

const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
})

pool.query(`SELECT version()`).then(res => console.log(res.rows[0].version)).catch(err => console.log(err))

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
}