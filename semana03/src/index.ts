import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import titular from "./Titular";
import ContaCorrente from "./ContaCorrente";

var Nome = leia.question("Informe o nome do titular: ")
var cpf = leia.question("Informe o cpf: ")
var telefone = leia.question("Informe o telefone: ")

var ti = new titular(Nome,cpf,telefone)
var c1 = new ContaBancaria(ti,telefone);

var cc = new ContaCorrente(ti,telefone)



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
console.log(`Chave Pix: ${ c1.getChavePix()}`)