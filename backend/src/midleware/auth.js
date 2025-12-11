const jwt = require('jsonwebtoken')
const User = require('../models/User')

const checkAuth = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({error: 'Not authorized'})
    } else {
        const user =  jwt.decode(token, process.env.JWT_SECRET)
        User.findById(user.id).then(response => {
            const userFromDb = response.rows[0]
            if (user.name != userFromDb.name) {
                return res.status(400).json({error: 'Not authorized'})
            } 
        }).catch(err => res.status(400).json(err))
    }
    next()
}

module.exports = checkAuth