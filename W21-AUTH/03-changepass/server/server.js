const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()
const db = require('./config/db');
require('dotenv').config()
db()

app.use(express.json()) // to process the req.body
app.use(cookieParser())
app.use('/images', express.static('./uploads'))
app.use('/user', require('./routes/userRoutes'))
app.use('/post', require('./routes/postRoutes'))
app.use('/comment', require('./routes/commentRoutes'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is up and running at port', port))

