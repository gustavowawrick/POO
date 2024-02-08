var pessoa = {
    nome: "Gustavo", idade: 21, saudar: function () {
        console.log('Olá');
    }
};

var pessoa1 = {
    nome: "Brenda", idade: 19, saudar: function () {
        console.log("Oii");
    }
};

pessoa1.nome = "Valéria";

console.log(pessoa, pessoa.saudar);
console.log(pessoa1, pessoa.saudar);