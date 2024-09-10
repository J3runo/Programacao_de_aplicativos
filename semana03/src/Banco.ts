import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

export default class Banco{
    private contas: ContaBancaria[] = []

    public transferir(){
        var numeroOrigem = leia.question("NUMERO DE ORIGEM: ")
        var numeroDestino = leia.question("NUMERO DE DESTINO: ")
        var valorTransf = leia.question("VALOR DE TRANSFERENCIA: ")
        
        var indexOrigem = this.contas.findIndex(conta => conta.getNumero() === numeroOrigem)
        var indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroDestino)
        
        
    }







    public adicionarConta(conta:ContaBancaria){
        this.contas.push(conta)
        console.log(`Conta com ${conta.getNumero()} foi criada com sucesso!!!`)
        console.log("--------------------------------------------------")
    }
    public addAccount(){
        var nome = leia.question("Digite seu nome: ")
        var cpf = leia.question("Digite seu cpf: ")
        var chavePix = leia.question("Digite chave Pix: ")
        var tipoConta = leia.keyInSelect(["Corrente", "Poupanca"]) +1

        var titular = new Titular(nome, cpf,"48 994556413")

        var conta: ContaBancaria
        if(tipoConta === 1){
            conta = new ContaCorrente(titular,chavePix)
        }else (
            conta = new ContaPoupanca(titular, chavePix)
        )
        this.adicionarConta(conta)
    }
    public mostrarContas(){
        console.log("-----TODAS CONTAS-----")
        console.log(this.contas)
        
    }
    public removerConta(){
        console.log("---------DELETAR CONTA-----------")
        var NumeroConta = leia.question("NUMERO DA CONTA PARA DELETAR: ")

        for(var i= 0; i < this.contas.length; i++){
            if(NumeroConta === this.contas[i].getNumero()){
            this.contas.splice(i,1)
            console.log("CONTA REMOVIDA COM SUCESSO!")
            return
        }
    }
        console.log(`NAO FOI ENCONTRADO NUNHUMA CONTA COM O NUMERO ${NumeroConta}`)
    }
}