import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 1999)
    }
    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}