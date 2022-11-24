const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')

router.post('/add', commentController.add)
// router.delete('/delete', commentController.delete)
router.delete('/delete/:post/:comment/:user', commentController.delete)
router.patch('/edit', commentController.edit)

module.exports = router