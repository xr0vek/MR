const express = require('express')

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`)
})