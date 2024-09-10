
export default class Veiculo{
    constructor(marca:String,modelo: string,ano:number,valor: number,disponivel: boolean){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor
        this.disponivel = disponivel
        this.historicoTransferencia = ""
        
    }
   
    marca: String;
    modelo: String;
    ano: number;
    valor:number;
    disponivel:boolean;
    historicoTransferencia:string

}