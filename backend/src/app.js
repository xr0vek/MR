const express = require('express')
const postgres = require('postgres')

const sql = postgres({
    localhost: "localhost",
    port: 5432,
    username: 'postgres',
    password: '[thdfv'
})

const app  = express()
const PORT = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credential: true,
}))


app.get('/', (req, res) => {
    console.log('/ GET')
    res.send("Hello")
})

app.post('/register', (req, res) => {
    console.log(req.body)
    res.send('succes register')
})

app.get('/users',  (req, res) => {
    sql`SELECT * from users`.then(data => users = data).then(data => res.json(data))
})

app.listen(PORT, () => {
    console.log(`Server is running on hhtp://localhost:${PORT}`)
})
