const express = require('express')
const router = express.Router();

const productController = require('../controllers/productController');

router
.get('/', productController.handleList)
.post('/', productController.handleAdd)
.delete('/', productController.handleDelete)

module.exports = router;