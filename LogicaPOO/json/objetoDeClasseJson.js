import { UmaClasse } from "../desestruturacao/umaClasse.js";

let umObjetoDeClasse = new UmaClasse("um valor");
let json = JSON.stringify(umObjetoDeClasse);

console.log(json);
