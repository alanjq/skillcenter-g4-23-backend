const http = require('http')
const HOSTNAME = '127.0.0.1' // localhost
const PORT = 3000

// Creamos el servidor
const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello world')
})

// Ejecutar el servidor o llamarlo para que escuche las peticiones
server.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está escuchando en http://${HOSTNAME}:${PORT}`);
})
