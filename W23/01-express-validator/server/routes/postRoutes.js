const express = require('express')
const router = express.Router();

const {auth} = require('../middlewares/auth');
const postController = require('../controllers/postController')

router.post('/add', auth, postController.add)
router.get('/list', auth, postController.list)
router.put('/like', auth, postController.like)
router.put('/likejs', auth, postController.likeJS)

module.exports = router