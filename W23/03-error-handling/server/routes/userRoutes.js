const express = require('express');
const router = express.Router();
const {advancedUpload} = require('../config/multer')
const {cloudinaryUpload} = require('../config/multer-cloudinary')
const userController = require('../controllers/userController');
const {auth} = require('../middlewares/auth')

const {body, oneOf} = require('express-validator')

router.post('/register', 
    body('username')
    .notEmpty()
    .trim()
    .escape()
    .withMessage('Username is mandatory')
    .isLength({min: 3})
    .withMessage('Username must be at least 3 characters')
    ,
    body('email')
    .notEmpty()
    .trim()
    .escape()
    .withMessage('Email is mandatory')
    .isEmail()
    .withMessage('Please provide a valid email'),
    body('password')
    .notEmpty()
    .trim()
    .escape()
    .withMessage('Password is mandatory')
    .isLength({min: 3})
    .withMessage('Password must be at least 3 characters'),
    userController.register)

router.post('/login', 
    oneOf([
        body('username')
    .notEmpty()
    .trim()
    .escape()
    .withMessage('Username is mandatory')
    .isLength({min: 3})
    .withMessage('Username must be at least 3 characters')
    ,
    body('email')
    .notEmpty()
    .trim()
    .escape()
    .withMessage('Email is mandatory')
    .isEmail()
    .withMessage('Please provide a valid email'),
    ]),
    body('password')
    .notEmpty()
    .trim()
    .escape()
    .withMessage('Password is mandatory')
    .isLength({min: 3})
    .withMessage('Password must be at least 3 characters'),
userController.login)
router.get('/logout', auth, userController.logout)
router.post('/emailconfirm', userController.emailConfirm)
router.post('/forgotpassword', userController.forgotPassword)
router.post('/changepassword', userController.changePassword)

router.get('/list', auth, userController.list)
router.delete('/delete', auth, userController.delete)
router.patch('/edit', auth, userController.edit)
router.patch('/profile', auth, cloudinaryUpload.single('image'), userController.profile)

module.exports = router;