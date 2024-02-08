class ValidadorCpf {
    static tamanhoCpf = 11;
    static validar(tamanho) {
        if (tamanho == this.tamanhoCpf) {
            return true;
        }
        return false;
    }
}

console.log(ValidadorCpf.validar("12345678910".length));