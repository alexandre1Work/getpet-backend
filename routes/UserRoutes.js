const router = require('express').Router();
const UserController = require('../controllers/UserController');

//middleware
const verifyToken = require('../helpers/verify-token.js')
const {imageUpload} = require('../helpers/image-upload.js')

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/checkUser', UserController.checkUser);
router.get('/:id', UserController.getUserById);
router.patch('/edit/:id', verifyToken, imageUpload.single("image") ,UserController.editUser) //rota protegida

module.exports = router