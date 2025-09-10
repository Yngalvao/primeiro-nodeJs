class Produtos {
    static produtos = [
        {
            id: 1,
            nome: 'Mouse USB',
            valor: 15.99
        },
        {
            id: 2,
            nome: 'Teclado USB',
            valor: 29.99
        }
    ];

    static listar() {
        return Produtos.produtos;
    }

    static adicionar(id, nome, valor) {
        Produtos.produtos.push({
            id: id,
            nome: nome,
            valor: valor
        });
    }

    static editar(indice) {

    }

    static excluir(indice) {
        Produtos.produtos.splice(indice, 1)
        console.log(Produtos.produtos);
    }
}

module.exports = Produtos;
