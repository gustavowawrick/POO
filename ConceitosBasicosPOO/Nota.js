class Nota {

    #grau;

    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    }

    getGrau() {
        return this.#grau;
    }

    setGrau(valor) {
        if (valor < 0 || valor > 10) {
            throw new Error();
        }
        this.#grau = valor;
    }
};

aluno1.notas = [new Nota("OO", 10)];

console.log(aluno1.notas);