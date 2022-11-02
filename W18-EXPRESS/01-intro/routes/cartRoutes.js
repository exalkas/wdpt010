const express = require('express')
const route = express.Router()

const cartController = require('../controllers/cartController')

route
.get('/', cartController.handleList)
.post('/', cartController.handleAdd)
.delete('/', cartController.handleDelete)

module.exports = route