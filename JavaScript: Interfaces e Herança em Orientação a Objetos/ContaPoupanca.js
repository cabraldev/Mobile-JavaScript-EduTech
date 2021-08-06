export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }


    sacar(valor){
        if (this._saldo >= valor) {
          this._saldo -= valor;
          return valor;
      } 
  
      }
  
      get cliente(){
        return this._cliente;
      }
  
      depositar(valor) {
        if(valor <= 100) {
            return;
        }
        this._saldo += valor;
    }
  
  
      transferir(valor, conta){
          const valorSacado = this.sacar(valor);
          conta.depositar(valorSacado);
      }
    
    
    
 }



