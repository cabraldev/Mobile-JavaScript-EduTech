import { User } from "./User.js";
import { ContaCorrente } from "./ContaCorrente.js";

   const cliente1 = new User("Ricardão", 123456789);
   const cliente2 = new User("Alice", 10110101010101); 


const contaCorrenteRicardao = new ContaCorrente(404, cliente1);
const conta2 = new ContaCorrente(405, cliente2);

contaCorrenteRicardao.depositar(500);

let valor = 200
contaCorrenteRicardao.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);