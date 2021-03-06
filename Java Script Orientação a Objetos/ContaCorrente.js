import { User } from "./User.js"

export class ContaCorrente{
  static numeroDeContas= 0;  
  agencia;
    _cliente; 

    _saldo = 0;





  set cliente(novoValor){
      if(novoValor instanceof User){
        this._cliente = novoValor;
      }
    
  };

    get saldo(){
      return this._saldo;
    }
    

   constructor(agencia, cliente){
     this.agencia  = agencia;
     this.cliente = cliente;
     ContaCorrente.numeroDeContas += 1;

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
      if(valor <= 0) {
          return;
      }
      this._saldo += valor;
  }


    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
  }