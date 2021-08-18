export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Ora Ora... você está mexendo em algo que não pode!")
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }


  // Método abstrato
  sacar(valor) {
    throw new Error(" Método não disponivel, método abstrato. ")
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa + valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  get cliente() {
    return this._cliente;
  }

  depositar(valor) {

    this._saldo += valor;
  }


  transferir(valor, conta) {
    if (this._tipo == "salario") {
      taxa = 1.05;
      return;
    }
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }


}
