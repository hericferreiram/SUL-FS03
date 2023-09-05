import http, { request } from 'node:http'

const host ='0.0.0.0'
const port = 8080
const server= http.createServer(function (request, response) {
    response.end('cuida')

})

server.listen(port, host, function()) {
    console.log('cuida na fuga'+ host + port)
}