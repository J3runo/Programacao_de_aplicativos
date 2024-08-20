import leia from "readline-sync"

var nomes: string [] = []
var idades: number[] = []

var nomeNova:string
var idadeNova: number

var nomeVelha:string
var idadeVelha: number



function pegarDados(qtd: number){
for(var i = 0; i<qtd; i++){
    var nome = leia.question("NOME: ")
    nomes.push(nome)
    var idade = leia.questionInt("IDADE: ")
    idades.push(idade)
}
}
function pessoaMaisNova(){
    for(var i=0; i<idades.length; i++){
        if(idadeNova === undefined || idades[i] < idadeNova){
            idadeNova = idades[i]
            nomeNova = nomes[i]
        }

    }
    console.log(`A PESSOA MAIS NOVA É ${nomeNova} COM ${idadeNova} ANOS`)
}


function pessoaMaisVelha(){
    idades.forEach((idade, index)=>{
        if(!idadeVelha || idade > idadeVelha){
            idadeVelha = idade
            nomeVelha = nomes[index]
        }

    })
    console.log(`A PESSOA MAIS VELHA É ${nomeVelha} COM ${idadeVelha} ANOS`)
}

pegarDados(3)
pessoaMaisVelha()
pessoaMaisNova()


