import { User } from "./User.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

   const cliente1 = new User("Ricardão", 123456789);

const contaCorrenteRicardao = new Conta(0, cliente1, 405);
contaCorrenteRicardao.depositar(500);
contaCorrenteRicardao.sacar(100);

const contaPoupanca = new Conta(0, cliente1, 404);

console.log(ContaPoupanca);
console.log(contaCorrenteRicardao);