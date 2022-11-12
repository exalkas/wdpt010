const express = require('express')
const router = express.Router();

const postController = require('../controllers/postController')

router.post('/add', postController.add)
router.get('/list', postController.list)

module.exports = router