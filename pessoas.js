var pessoa = {
    nome: "Gustavo", idade: 21, saudar: function () {
        console.log('Olá');
    }
};

var pessoa1 = {
    nome: "Brenda", anoNascimento: 2006, profissao: "Médica", calculaIdade: function () {
        console.log(new Date().getFullYear() - this.anoNascimento);
    }
};

var nomeDoAmigo = "João";

pessoa1.nome = "Valéria";

pessoa.saudar = function () {
    console.log("Hello " + nomeDoAmigo + "!");
};

console.log(pessoa, pessoa.saudar());
console.log(pessoa1, pessoa1.calculaIdade())