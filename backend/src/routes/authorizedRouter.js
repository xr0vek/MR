const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const userValidatorConfig = require("../validators/userValidatorConfig")
const validator = require('../midleware/validator')
const chekAuth = require('../midleware/auth')

router.get('/user/all', chekAuth, userController.all)
router.post('/user/logout', chekAuth,userController.logout)
router.get('/user/profile', chekAuth, userController.profile) 

module.exports = router