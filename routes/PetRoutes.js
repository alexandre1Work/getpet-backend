const router = require('express').Router();
const PetController = require("../controllers/PetController.js")

//middleware
const verifyToken = require('../helpers/verify-token.js')

router.post('/create', verifyToken, PetController.create)

module.exports = router