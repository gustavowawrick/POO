import { CarroComPlaca } from "./carroComPlaca.mjs";

export class Locadora {
    #carros;
    constructor() {
        this.#carros = [];
    }

    adicionaCarro(umCarro) {
        this.#carros.push(umCarro);
        console.log("Quantidade carros: " + this.#carros.length);
    }

    consultaCarros() {
        this.#carros.forEach((carro) => console.log("Carro | Placa: (" + carro.placa + ") - Tanque: " + carro.tanque));
    }

    abasteceCarro(index, quantidade) {
        if (index >= 0 && index < this.#carros.length)
            this.#carros[index].tanque = quantidade;
    }
}