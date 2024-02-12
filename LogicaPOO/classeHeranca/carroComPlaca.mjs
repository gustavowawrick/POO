import { Carro } from "../classeSimples/carro.mjs";

export class CarroComPlaca extends Carro {
    #placa;
    constructor(umaPlaca) {
        super(55);
        this.#placa = umaPlaca;
    }

    get placa() {
        return this.#placa;
    }
}