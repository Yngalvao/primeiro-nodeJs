class Pessoa { //SEMPRE COM LETRA MAIUSCULA
    //ATRIBUTOS
    nome = '';
    idade = '';
    cpf = '';

    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    //EVENTOS DE CLASSE
    correr() {
        console.log(`O ${this.nome} está correndo...`);
    }

    dormir() {

    }
}

const pessoaClasse1 = new Pessoa("Maria", 23, "123");
const pessoaClasse2 = new Pessoa("Max", 14, "321");
const pessoaClasse3 = new Pessoa("João", 45, "213");

console.log(pessoaClasse1);
console.log(pessoaClasse2);
console.log(pessoaClasse3);

pessoaClasse1.correr()
pessoaClasse2.correr()
pessoaClasse3.correr()

pessoaClasse1.nome = 'Jonas'; //mudou o nome