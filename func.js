saldo = 1500

deposito = 100
//saldo += deposito  += siginifica que você está repetindo a palavara saldo 

function realizarDeposito(deposito, saldo){
  saldo = saldo + deposito
  console.log(saldo)
  return saldo
}

saldo = realizarDeposito(10000, saldo)
console.log(saldo)

//saldoFuturo = saldo + deposito
// este é lido por ultimo

 

