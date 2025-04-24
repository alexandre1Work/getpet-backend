const Pet = require('../models/Pet.js');

module.exports = class PetController {

    static async create(req, res) {
        res.json({message: "Rota funfano"})
    }

}