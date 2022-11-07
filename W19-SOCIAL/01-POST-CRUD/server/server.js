const express = require('express');
const app = express()
const db = require('./config/db');
require('dotenv').config()
db()

app.use(express.json())

app.use('/user', require('./routes/userRoutes'))
app.use('/post', require('./routes/postRoutes'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is up and running at port', port))

