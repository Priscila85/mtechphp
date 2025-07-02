//a conta tem?
//numero da conta, titular, saldo, extrato

//o que eu posso fazer na conta?
//sacar, depositar, extrato, transferir


// classe conta
class Conta{
    constructor(titular, numConta, saldo = 0){
        // classe titular
        this.titular = titular // this = palavra reservada para indicar que a variavel/função pertencea classe em questão.
        this.numConta = numConta
        this.saldo = saldo
        this.extrato = []  // lista extrato sempre começa vazio.
    }
    depositar(valor){
        if(valor > 0){
            this.saldo = this.saldo + valor
            this.extrato.push("Deposito realizado com sucesso")// ao invés de imprimir mostre na lista
        }
    }
    realizarSaque(valor){
        if(valor <= 0, this.saldo = this.saldo - valor){
            this.extrato.push("Digite um valor válido")
            
        }
       else if(valor > this.saldo){
            console.log("Saldo Insuficiente")
        }
         //aqui realiza o saque
        else{
            this.saldo = this.saldo - valor
            this.extrato.push("Saque Realizado")
        }
    }
    transferencia(valor, conta){
        this.extrato.push("Incio da Transferencia")
        this.realizarSaque(valor)
        conta.depositar(valor)
        this.extrato.push("Fim da Transferencia")
    }
    gerarExtrato(){
        this.extrato.forEach(operacao =>{
            console.log(operacao + "\n")
        })
    }
}
conta1 = new Conta("Ana", "10235", 100)
console.log(conta1.saldo)
conta1.depositar(50)
console.log(conta1.saldo)
conta1.realizarSaque(50)

conta2 = new Conta("Senac", "10582", 500)
conta1.transferencia(50, conta2)

console.log(conta1.saldo)
conta1.gerarExtrato()

//quando é um numero que identifica alguém ou uma coisa tem que colocar como string(colocar entre "")