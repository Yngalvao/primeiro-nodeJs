const { createServer } = require('node:http')
const listarProdutos = require('./routes/produtos')
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

        const dados = listarProdutos();

        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(dados));
    }

    if (url === '/produtos/adicionar') {

        produtos.push({
            id: 3,
            nome: 'Monitor 34p',
            valor: 3330.00
        });

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Produto Adicionado com sucesso");
    }

    if (url === '/produtos/remover') {

        produtos.pop();

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Produto removido com sucesso");
    }

    response.writeHead(404, { 'Content-Type': 'text/plain' });
    return response.end("Página não encontrada - Not Found");

});

app.listen(port, host, () => {
    console.log(`Servidor executando http://${host}:${port}`)
});
