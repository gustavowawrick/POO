export class Carro {
    #tanque;
    #capacidadeTanque;

    constructor(capacidade) {
        this.#tanque = 0;
        this.#capacidadeTanque = capacidade;
    }

    get tanque() {
        return this.#tanque;
    }

    get capacidade() {
        return this.#capacidadeTanque;
    }

    set tanque(qtd) {
        if (qtd >= 0) {
            if (qtd + this.#tanque > this.#capacidadeTanque) {
                this.#tanque = this.#capacidadeTanque;
            }
            else {
                this.#tanque += qtd;
            }
        }
    }
}