const express = require('express');
const router = express.Router();
const {advancedUpload} = require('../config/multer')
const {cloudinaryUpload} = require('../config/multer-cloudinary')
const userController = require('../controllers/userController');
const {auth} = require('../middlewares/auth')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/logout', auth, userController.logout)
router.post('/emailconfirm', userController.emailConfirm)
router.post('/forgotpassword', userController.forgotPassword)
router.post('/changepassword', userController.changePassword)

router.get('/list', auth, userController.list)
router.delete('/delete', auth, userController.delete)
router.patch('/edit', auth, userController.edit)
router.patch('/profile', auth, cloudinaryUpload.single('image'), userController.profile)

module.exports = router;