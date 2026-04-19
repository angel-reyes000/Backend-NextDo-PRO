const {Pool} = require('pg');
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

const crearConexion = async () => {
    try {
        const cliente = await pool.connect()
        console.log("Base de datos conectada✅")
    } catch (error) {
        console.error(error.message)
    } 
    
} 

module.exports = {pool, crearConexion};