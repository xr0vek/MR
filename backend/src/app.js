const express = require('express')
const cors = require('cors')
require('dotenv').config()
const authorizedRouter = require('./routes/authorizedRouter')
const publicRouter = require('./routes/publicRouter')
const PORT = process.env.PORT || 3000;  
const app  = express()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['POST', 'GET', "DELETE", 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(authorizedRouter)
app.use(publicRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`)
})