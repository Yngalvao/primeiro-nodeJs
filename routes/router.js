const produtos = require('./produtos');

const rotas = {
    '/produtos': {
        'GET': produtos.listar(),
        'POST': produtos.adicionar(),
        'PUT': produtos.editar(),
        'DELETE': produtos.deletar(0)
    }
};

module.exports = rotas;
