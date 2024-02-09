const empregado = {
    salarioBase: 5000,
    valorHoraExtra: 100,
    quantHorasExtras: 10,
    calculaSalario: function () {
        return this.salarioBase + (this.valorHoraExtra * this.quantHorasExtras);
    }
};

function criaEmpregado(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function () {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
};

const empregado1 = ("Jorge", 1990, "Professor");


console.log("Profissao: " + empregado1.toString() + "\n" +
    "Salário nase: " + empregado.salarioBase + "\n" +
    "Salário com horas extras: " + empregado.calculaSalario());