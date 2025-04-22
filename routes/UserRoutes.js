const router = require('express').Router();
const UserController = require('../controllers/UserController');

//middleware
const verifyToken = require('../helpers/verify-token.js')

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/checkUser', UserController.checkUser);
router.get('/:id', UserController.getUserById);
router.patch('/edit/:id', verifyToken, UserController.editUser) //rota protegida

module.exports = router