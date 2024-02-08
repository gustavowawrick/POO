class Estudante extends Pessoa {

    constructor(nome, anoNascimento, profissao, matricula) {
        super(nome, anoNascimento, profissao);
        this.matricula = matricula;
    }

    saudar() {
        return super.saudar() + ", colegas!";
    }
}

const aluno1 = new Estudante("Jorge", 2001, "Dev", 202020);

aluno1.anoNascimento = 2000;

console.log("Nome: " + aluno1.nome + "\n" +
    "Ano de nascimento: " + aluno1.anoNascimento + "\n" +
    "Idade: " + aluno1.calculaIdade() + "\n" +
    "Profissão: " + aluno1.profissao + "\n" +
    "Matrícula: " + aluno1.matricula + "\n" +
    aluno1.saudar());
