const postgres = require('postgres')

module.exports = () => {
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = decodeURIComponent(process.env.DB_PASSWORD);
    const DB_NAME = process.env.DB_NAME;
    const DB_PORT = process.env.DB_PORT;
    const DB_HOST = process.env.DB_HOST;

    if (!DB_USER || !DB_PASSWORD || !DB_NAME || !DB_PORT || !DB_PASSWORD) {
        console.log('Environment variables are not defined')
    }

    const sql = postgres({
        host : DB_HOST,           
        port : DB_PORT,         
        database : DB_NAME,            
        username : DB_USER,            
        password : DB_PASSWORD,
    })
    
    sql`SELECT 1 as test`.then(res => console.log('Data base connected succesfull')).catch(err => console.log(err))

    return sql
}