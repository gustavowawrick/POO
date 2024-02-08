function Pessoa(nome, anoNascimento, profissao){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
    this.calculaIdade =  function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
}

const pessoa = new Pessoa("Gustavo", 2002, "DEV");

var pessoa1 = {
    nome: "Brenda", anoNascimento: 2006, profissao: "Médica", calculaIdade: function () {
        console.log(new Date().getFullYear() - this.anoNascimento);
    }
};

pessoa1.nome = "Valéria";

var nomeDoAmigo = "João";

pessoa.saudar = function () {
    console.log("Hello " + nomeDoAmigo + "!");
};

console.log("Pessoa" + "\n" +
            "Nome: " + pessoa.nome + "\n" +
            "Ano de Nascimento: " + pessoa.anoNascimento + "\n" +
            "Idade: " + pessoa.calculaIdade() + "\n" +
            "Profissão: " + pessoa.profissao);

console.log(Object.getPrototypeOf(pessoa));