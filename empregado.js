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

console.log("Nome: " + empregado1.nome + "\n" +
            "Idade: " + empregado1.calculaIdade() + "\n" + 
            "Profissão: " + empregado1.profissao);

console.log("Salário Base: " + empregado.salarioBase + "\n" +
    "Salário Bruto: " + empregado.calculaSalario());