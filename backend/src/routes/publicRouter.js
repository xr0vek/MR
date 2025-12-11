const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const userValidatorConfig = require("../validators/userValidatorConfig")
const validator = require('../midleware/validator')

router.post('/user/register', userValidatorConfig.register, validator, userController.register)
router.post('/user/login', userValidatorConfig.login, userController.login)
router.get('/', ((req, res) => res.send('Hello')))

module.exports = router