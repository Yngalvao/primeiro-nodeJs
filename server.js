const { createServer } = require('node:http');
const { hostname } = require('node:os');

const host = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.end('<h1>Hello Wold!</h1> <br /> Aula de Backend');
});

server.listen(port, host, () => {
 console.log(`Servidor executando http://${host}:${port}`)
});