import { Carro } from "./carro.mjs";

var carro = new Carro(55);

console.log("Capacidade: " + carro.capacidade);
console.log("Tanque: " + carro.tanque);

carro.tanque = 30;
console.log("Tanque: " + carro.tanque);

carro.tanque = 30;
console.log("Tanque: " + carro.tanque);

carro.tanque = 30;
console.log("Tanque: " + carro.tanque);