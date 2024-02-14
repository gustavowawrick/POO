import { UmaClasse } from "./umaClasse.js";

let umaClasse = new UmaClasse("Primeiro atributo");

let { capturaPrimeiroAtributo: umAtributo, outroAtributo } = umaClasse;

console.log("Um Atributo: " + umAtributo);
console.log("Outro Atributo: " + outroAtributo);