class Estudante extends Pessoa {

    #matricula;

    constructor(nome, anoNascimento, matricula) {
        super(nome, anoNascimento, "Estudante");
        this.#matricula = matricula;
    }

    getMatricula() {
        return this.#matricula;
    }

    setMatricula(valor) {
        this.#matricula = valor;
    }

    saudar() {
        return super.saudar() + ", colegas!";
    }
}

const aluno1 = new Estudante("Jorge", 2001, { numero: 2000, modalidade: "Regular" });

let matriculaAluno = aluno1.getMatricula();

aluno1.anoNascimento = 2000;

console.log("Nome: " + aluno1.nome + "\n" +
    "Ano de nascimento: " + aluno1.anoNascimento + "\n" +
    "Idade: " + aluno1.calculaIdade() + "\n" +
    "Profissão: " + aluno1.profissao + "\n" +
    "Matrícula: " + matriculaAluno.numero + "\n" +
    "Modalidade: " + matriculaAluno.modalidade + "\n" +
    aluno1.saudar());