const router = require('express').Router();
const PetController = require("../controllers/PetController.js")

router.post('/create', PetController.create)

module.exports = router