const express = require('express')

const app = express()
// console.log("🚀 ~ app", app)
require('dotenv').config()


/**
 * HTTP verbs
 * get -> to retrieve a resource
 * post -> to create a new resource
 * delete -> to delete a resource
 * put -> to edit a resource
 * patch -> to edit a resource
 */



app.use('/users', require('./routes/userRoutes.js'))
app.use('/products', require('./routes/productRoutes'))
app.use('/cart', require('./routes/cartRoutes'))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is up and running at port', process.env.PORT))
