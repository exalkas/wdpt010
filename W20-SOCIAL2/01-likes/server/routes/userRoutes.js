const express = require('express');
const router = express.Router();
const {advancedUpload} = require('../config/multer')
const {cloudinaryUpload} = require('../config/multer-cloudinary')
const userController = require('../controllers/userController');

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', userController.list)
router.delete('/delete', userController.delete)
router.patch('/edit', userController.edit)
router.patch('/profile', cloudinaryUpload.single('image'), userController.profile)

module.exports = router;