import { v4 as uuid } from "uuid"

export default class veiculo{

    private id:string
    private modelo:string
    private cor:string
    private ano:number
    private preco:number
    private imagem:string


constructor(modelo:string,cor:string,ano:number,preco:number,imagem:string, id?:string){

    this.id = id === undefined? uuid() : id
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
    this.preco = preco
    this.imagem = imagem

}
public getId(){
     return this.id
 }
 public getModelo(){
    return this.modelo
 }
public getCor(){
     return this.cor
 }

public getAno(){
     return this.ano
 }
public getPreco(){
     return this.preco
 }
public getImagem(){
     return this.imagem
 }


}