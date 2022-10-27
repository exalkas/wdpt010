// COMMON JS module system
// require = import 
const http = require('http')
// console.log("🚀 ~ http", http)

const fs = require('fs');
require('dotenv').config()

const students = [
    {
    name: 'john',
    age:13
    },
    {
    name: 'john2',
    age:14
    },
    {
    name: 'john2',
    age:15
    },
]

// save array to file
try {
    fs.writeFileSync('test.txt', JSON.stringify(students));
    // file written successfully
  } catch (err) {
    console.error(err);
  }


// REQUEST LISTENERS

const requestListener = (req, res) => {

    // console.log('request is', req)
    // console.log('response is', res)

    res.end(JSON.stringify(students))
}

const db = require('./db')
db()

const server = http.createServer(requestListener);
// console.log("🚀 ~ server", server)
// console.log("🚀 ~ process", process.env)

const port = process.env.PORT || 5001
console.log("🚀 ~ port", port)

server.listen(port, () => console.log('Server is up and running at port', port))
