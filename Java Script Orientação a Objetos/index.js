class User{
 nome; 
 cpf;

}

class ContaCorrente{
    agencia;
    saldo;
   
    
    sacar(valor){
      if (this.saldo >= valor) {
        this.saldo -= valor;
    } 

    }

     depositar(valor){
       if(valor >0 ) {
       this.saldo += valor;
       }
     }

  }
   

   const cliente1 = new User();
 cliente1.nome = "Ricardão";
 cliente1.cpf = 404404404404040;

   const cliente2 = new User(); 
cliente2.nome = "Alice";
cliente2.cpf = 10110101010101;


const contaCorrenteRicardao = new ContaCorrente();
contaCorrenteRicardao.saldo = 10000;
contaCorrenteRicardao.agencia = 404;


console.log(contaCorrenteRicardao.saldo);
contaCorrenteRicardao.depositar( 100);
contaCorrenteRicardao.sacar(50);


console.log(contaCorrenteRicardao);