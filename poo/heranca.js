class Pessoa {
    nome;
    cpf;
    data_nascimento;

    constructor(nome, cpf, data_nascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    autenticacao() {
        console.log(`${this.name} - Autenticando`);
    }
}

class Gerente extends Pessoa { //extends - puxa a herança da classe pessoa
    constructor(nome, cpf, data_nascimento) {
        super(nome, cpf, data_nascimento);
    }
}

const pessoa = new Pessoa('João', '123', '2000-09-27')
const gerente = new Gerente('Jose', '123', '2000-09-27')

console.log(gerente);