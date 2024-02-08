class Estudante extends Pessoa {

    constructor(nome, anoNascimento, profissao, matricula) {
        super(nome, anoNascimento, profissao);
        this.matricula = matricula;
    }
}

const aluno1 = new Estudante("Jorge", 2001, "Dev", 202020);

console.log(aluno1);