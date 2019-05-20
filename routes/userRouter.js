const router = require('express').Router();
const userController = require('../controller/userController');
const authController = require('../controller/authController');

router.get('/users', authController.verifyToken, userController.getUsers);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.postUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.post('/user/login', userController.login);

module.exports = router;