const { createServer } = require('node:http');

const host = 'localhost';
const port = 3000;

const produtos = [
];

const app = createServer((request, response) => {

    const { url, method } = request;

    console.log(" URL - ", url);
    console.log("Método/Verbo - ", method);

    if (url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Olá Node.Js, Servidor OK");
    }

    if (url === '/produtos') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(produtos));
    }

    if (url === '/produtos/adicionar') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Produto Adicionado comSucesso");
    }

    response.writeHead(404, { 'Content-Type': 'text/plain' });
    return response.end("Página não encontrada - Not Found");

});

app.listen(port, host, () => {
    console.log(`Servidor executando http://${host}:${port}`)
}); 