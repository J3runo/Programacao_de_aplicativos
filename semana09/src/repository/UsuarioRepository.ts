import { Client } from "pg";
import Usuario from "src/enty/usuarios";

export default class UsuarioRepository {
    private connection: Client

    constructor() {
        if(!this.connection){
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'revenda',
                user: 'postgres',
                password: 'senai'
            });
        }
    }

    async save(usuario: Usuario){
        try {
            console.log(usuario.getPassword)
            this.connection.connect()
            const sql = "INSERT INTO usuario (id, nome, data_nascimento, email, senha_hash, criado_em, atualizado_em) VALUES ($1, $2, $3, $4, $5, $6, $7)";
            const values = [
                usuario.getId(),
                usuario.getName(),
                usuario.getDataNascimento(),
                usuario.getEmail(),
                usuario.getPassword(),
                usuario.getCriadoEm(),
                usuario.getAtualizadoEm()
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findByEmail(email: string){
        try {
            this.connection.connect();
            const sql = "SELECT * FROM usuario WHERE email = $1";
            const result = await this.connection.query(sql, [email]);
            return result.rows[0];
        } catch (error) {
            console.log(error)
            return []
        }finally {
            this.connection.end();
            this.connection = null;
        }
    }
}