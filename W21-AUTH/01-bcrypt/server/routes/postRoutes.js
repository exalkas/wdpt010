const express = require('express')
const router = express.Router();

const postController = require('../controllers/postController')

router.post('/add', postController.add)
router.get('/list', postController.list)
router.put('/like', postController.like)
router.put('/likejs', postController.likeJS)

module.exports = router