
import leia from "readline-sync"
import Banco from "./Banco";

var nubank = new Banco()

var opcao = 0
do{
    console.log("----------MENU-------------")
    opcao = leia.keyInSelect(["CRIAR CONTA","TRANFERENCIA","DELETAR CONTA","MOSTRAR CONTAS"]) +1
    switch(opcao){
    case 1:
        console.log("----------CRIANDO CONTA-----------")
    nubank.addAccount()
    break
    case 2:
        console.log("------TRANSFERIR---------")
        nubank.transferir()
        break       
        case 3:
    
            nubank.removerConta()
            break 
            case 4:
               nubank.mostrarContas()
               break
}
}while(opcao !== 0)









/*import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import titular from "./Titular";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

var Nome = leia.question("Informe o nome do titular: ")
var cpf = leia.question("Informe o cpf: ")
var telefone = leia.question("Informe o telefone: ")

var ti = new titular(Nome,cpf,telefone)
var c1 = new ContaBancaria(ti,telefone);

var depo = leia.questionFloat("Valor a depositar R$: ")
var saque = leia.questionFloat("Valor a sacar R$: ")
console.log("----------CONTA NORMAL----------")
c1.depositar(depo)
c1.sacar(saque)


console.log("----------CONTA CORRENTE---------")
var cc = new ContaCorrente(ti,telefone)
cc.depositar(100)
cc.sacar(200)

console.log("----------CONTA POUPANCA---------")
var cp =new ContaPoupanca(ti,"bruno@chavepix")
cp.depositar(200)
cp.sacar(200)



/*
c1.depositar(250)
c1.sacar(20)
c1.consultarSaldo()

c1.getNumero()
c1.getTitular()
c1.getDataCriacao()

console.log("---------------------")
console.log(`Numero da Conta: ${c1.getNumero()}` )
console.log(`Dados do `, c1.getTitular() )
console.log(`data de registro: ${c1.getDataCriacao()}` )
console.log(`Saldo da conta R$: ${c1.getSaldo()}` )
console.log(`Chave Pix: ${ c1.getChavePix()}`)*/