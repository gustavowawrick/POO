class Pessoa {

    constructor(nome, anoNascimento, profissao) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    }

    saudar() {
        return "Olá, eu sou " + this.nome;
    }

    calculaIdade() {
        return new Date().getFullYear() - this.anoNascimento;
    }

}

const pessoa1 = new Pessoa("Gustavo", 2002, "Dev");

console.log("Nome: " + pessoa1.nome + "\n" +
    "Ano de nascimento: " + pessoa1.anoNascimento + "\n" +
    "Idade: " + pessoa1.calculaIdade() + "\n" +
    "Profissão: " + pessoa1.profissao + "\n" +
    pessoa1.saudar());