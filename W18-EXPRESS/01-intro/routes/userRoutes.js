const express = require('express');
const router = express.Router();
// console.log("🚀 ~ router", router)

const userController = require('../controllers/userController');

router.get('/', userController.firstListener) // handles the /users/
router.get('/:name/:age/:city', userController.secondListener) // handles the /users/name/age/city
router.post('/add', (req, res) => res.send('hello from users post'))
router.delete('/delete', (req, res) => res.send('hello from users delete'))

module.exports = router