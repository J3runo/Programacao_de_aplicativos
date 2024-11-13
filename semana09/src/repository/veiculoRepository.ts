import { Client, Connection } from "pg";
import veiculo from "src/enty/Veiculo";

export default class VeiculoRepository {
    private connection: Client

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'revenda',
                password: 'senai',
                port: 5432,

            })

        }


    }

    async save(veiculo: veiculo) {

        try {
            this.connection.connect()
            const sql = 'INSERT INTO veiculo (id, modelo,cor, ano, valor, imagem) VALUES ($1, $2, $3, $4, $5, $6)'
            const values = [veiculo.getId(), veiculo.getModelo(), veiculo.getCor(), veiculo.getAno(), veiculo.getPreco(), veiculo.getImagem()]

            await this.connection.query(sql, values)

        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end()
            this.connection = null;
        }

    }

    async findAll() {

        try {
            this.connection.connect()
            const sql = 'SELECT * FROM veiculo where esta_ativo = $1'
            const result = await this.connection.query(sql,[true])
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                console.log("Não foi encontrado nenhum valor")
                return []
            }

        } catch (error) {
            console.log(error)
            return []
        } finally {
            this.connection.end()
            this.connection = null;
        }
    }

    async findById(id: string) {

        try {
            this.connection.connect()
            const sql = 'SELECT * FROM veiculo WHERE id = $1'
            const resultId = await this.connection.query(sql,[id])
            return resultId.rows;
        } catch (error) {
            console.log(error)
            return []
        } finally {
            this.connection.end()
            this.connection = null;
        }
        }


    async deletarVeiculo(id:string){
        try {
            this.connection.connect()
            const sql = 'UPDATE veiculo SET esta_ativo = $1 WHERE id= $2'
            await this.connection.query(sql, [false, id])
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end()
            this.connection = null;
        }
    }
    }    
    

