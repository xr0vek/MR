const {body} = require('express-validator')

module.exports = {
    register: [
        body('email').isEmail().normalizeEmail(),
        body('name').isLength({min: 3}),
        body('password').notEmpty().isLength({min: 6})
    ],
    login : [
        body('email').isEmail().normalizeEmail(),
        body('password').notEmpty().isLength({min: 6})
    ],
    update: [
        body('email').isEmail().normalizeEmail().optional(),
        body('name').isLength({min: 3}).optional(),
        body('password').isLength({min: 6}).optional(),
    ]
}