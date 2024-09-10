import titular from "./Titular";

export default class ContaBancaria{
    constructor(titular:titular,chavePix: string){
        this.titular = titular
        this.chavePix = chavePix
        this.dataCriacao =  new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        this.saldo = 0
        this.numero = String (Math.floor(Math.random() * 89999) + 10000)
    }
   
    private numero: string;
    private saldo: number;
    private titular: titular;
    private chavePix:string;
    private dataCriacao:string;

    public getNumero():string{
        return this.numero
    }

    public getTitular():titular{
        return this.titular
    }

    public getDataCriacao():string{
        return this.dataCriacao
    }

    public getSaldo():number{
        return this.saldo
    }
    
    public setSaldo(Saldo: number): number {
        this.saldo = Saldo;
        return this.saldo;
    }

    public getChavePix():string{
        return this.chavePix
    }


    public setNumero(numero:string): void{
        this.numero = numero
    }


    depositar(valor:number){
        if(valor <= 0){
            console.log(`o valor ${valor} é invalido!!!`);
            return;
        }
        this.saldo = this.saldo + valor;
        console.log(`O Deposito no valor de R$: ${valor} foi realizado com sucesso, seu novo saldo é de R$: ${this.saldo} reais.`)
    
}

    sacar(valor:number){
        if(valor > this.saldo || valor <= 0){
            console.log(`saldo insuficiente para saque seu saldo é de ${this.saldo}`)
            return;
        }
        this.saldo -= valor
        console.log(`O saque no valor de R$: ${valor} foi realizado com sucesso, seu saldo é de R$: ${this.saldo} reais.`)
    }

    consultarSaldo(){
        console.log(`seu saldo é de R$: ${this.saldo}`)
    }
    
}