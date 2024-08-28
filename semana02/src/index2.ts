import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import titular from "./Titular";

var Nome = leia.question("Informe o nome do titular: ")
var cpf = leia.question("Informe o cpf: ")
var telefone = leia.question("Informe o telefone: ")

var ti = new titular(Nome,cpf,telefone)
var c1 = new ContaBancaria(ti,"984565445");

c1.depositar(250)
c1.sacar(20)
c1.consultarSaldo()

console.log("---------------------")
console.log(`Numero da Conta: ${c1.numero}` )
console.log(`Dados do `, c1.titular )
console.log(`data de registro: ${c1.dataCriacao}` )
console.log(`Saldo da conta R$: ${c1.saldo}` )
console.log(`Chave Pix: ${ c1.chavePix}`)