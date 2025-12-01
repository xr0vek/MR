const express = require('express')
const cors = require('cors')
require('dotenv').config()
const sqlConfig = require('./db')

const sql = sqlConfig()
const PORT = process.env.PORT || 3000;  

const app  = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['POST', 'GET', "DELETE", 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get('/', (req, res) => {
    console.log('/ GET')
    res.send("Hello")
})

app.post('/register', (req, res) => {
})

app.post('/login', (req, res) => {
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`)
})