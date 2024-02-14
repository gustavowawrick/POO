export class UmaClasse {
    #umAtributo;
    outroAtributo = "atributo dois";

    constructor(n) {
        this.#umAtributo = n;
    }

    capturaPrimeiroAtributo() {
        return this.#umAtributo;
    }
}