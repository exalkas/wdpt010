const express = require('express');
const router = express.Router();
const multer  = require('multer')
const userController = require('../controllers/userController');

/**
 * MULTER SET UP
 */
// SIMPLE SETUP
const upload = multer({ dest: './uploads' })

// ADVANCED SETUP
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')

    },
    filename: function (req, file, cb) {
    
        let extension = ''
        
        if (file.mimetype.includes('image')) {

            extension = file.mimetype.slice(6)
        }
      const uniqueSuffix = req.body._id + '-' + Date.now() + '.' + extension
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const advancedUpload = multer({ storage: storage })

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', userController.list)
router.delete('/delete', userController.delete)
router.patch('/edit', userController.edit)
router.patch('/profile', advancedUpload.single('image'), userController.profile)

module.exports = router;