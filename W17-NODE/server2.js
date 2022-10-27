const http = require('http')

const server = http.createServer()

server.listen(5004, () => console.log('server 2 running'))
