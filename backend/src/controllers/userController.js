const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    register: (req, res) => {
        const {email, password, name} = req.body
        const hashedPassword = bcrypt.hashSync(password, 10)
        User.create({email, hashedPassword, name})
        .then(response => res.status(201).json({message: "Success register"}))
        .catch(err => res.status(409).json(err))
    },
    login: (req, res) => {
        User.findByEmail(req.body.email)
        .then(response => {
            const {name, password, email, id, role} = response.rows[0]
            const token = jwt.sign({id, role, name}, process.env.JWT_SECRET)
            if (bcrypt.compareSync(req.body.password, password)) {
                res.cookie('token', token, {
                    httpOnly: true,   
                    secure: true,     
                    sameSite: 'strict',
                    maxAge: 24 * 60 * 60 * 1000, 
                })
                return res.status(200).json({id, name, role, email})
            } else {
                return res.status(401).json({error: 'Incorect password'})
            }
        })
        .catch(err => res.status(500).json(err))    
    },
    logout: (req, res) => {
            res.clearCookie('token', {
                httpOnly: true,   
                secure: true,     
                sameSite: 'strict',
            })
            return res.status(200).json({message: 'Logout success'})

    },
    update: (req, res) => {
        console.log(req.body)
    },
    profile: (req, res) => {
        const token = res.cookies.token
        const user =  jwt.decode(token, process.env.JWT_SECRET)
        User.findById(user.id).then(response => res.status(200).json(response.row[0])).catch(err => res.status(400).json(err))
        
    },
    all: (req, res) => {
        User.all().then(response => res.status(200).json(response.rows))
    },
}

module.exports = userController