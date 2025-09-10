const { createServer } = require('node:http');
const Produtos = require('./routes/produtos');
const rotas = require('./routes/router');

const host = 'localhost';
const port = 3000;

const app = createServer((request, response) => {

    const { url, method } = request;

    console.log(" URL - ", url);
    console.log("Método/Verbo - ", method);

    if (url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Olá Node.Js, Servidor OK");
    }

    if (url === '/produtos' && method === 'GET') {
        rotas[produtos][method];
        const dados = Produtos.listar();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(dados));
    }

    if (url === '/produtos' && method === 'POST') { //adicionar
        Produtos.adicionar(4, 'Monitor', 5000.00);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Produto Adicionado com sucesso");
    }


    if (url === '/produtos' && method === 'PUT') { //editar
        Produtos.editar();
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Produto Editado com sucesso");
    }

    if (url === '/produtos' && method === 'DELETE') { //remover
        Produtos.excluir(1);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        return response.end("Produto removido com sucesso");
    }

    response.writeHead(404, { 'Content-Type': 'text/plain' });
    return response.end("Página não encontrada - Not Found");

});

app.listen(port, host, () => {
    console.log(`Servidor executando http://${host}:${port}`)
});
