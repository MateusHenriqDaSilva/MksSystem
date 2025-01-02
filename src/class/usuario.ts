import DatabaseConnection from '../class/databaseConnection'
import { ICurse } from './curse';

export interface IUser {
    nome: any;
    email: any;
    senha: any;
    dataNascimento: any;
    sexo: any;
    listaDeCursos?: ICurse[]
}

export default class Usuario {
    private listUsers: IUser[] = [];

    addUsersList(nome: any, email: any, senha: any, dataNascimento: any, sexo: any) {
        const user: IUser = {
            nome: nome,
            email: email,
            senha: senha,
            dataNascimento: dataNascimento,
            sexo: sexo
        };
        this.listUsers.push(user);
    }

    static async getAllUsersFromDB() {
        const conector = new DatabaseConnection();
        await conector.connect();
        const db = conector.getDb('Portifolio');
        const collection = db.collection('Usuarios');
        const usuario = new Usuario(); // Crie uma nova instância de Usuario aqui
        try {
            const users = await collection.find().toArray();
            users.forEach((user: any) => {
                const newUser: IUser = {
                    nome: user.nome,
                    email: user.email,
                    senha: user.senha,
                    dataNascimento: user.dataNascimento,
                    sexo: user.sexo
                };
                usuario.listUsers.push(newUser); // Adicione os usuários à lista desta instância
            });
            return usuario.listUsers; // Retorne a lista desta instância
        } catch (error) {
            console.error('Erro ao obter usuários do banco de dados', error);
        }
    }

    static async addUserBase(usuario: Usuario) {
        const conector = new DatabaseConnection();
        await conector.connect();
        const db = conector.getDb('Portifolio');
        const collection = db.collection('Usuarios');
        try {
            // Itere sobre a lista de usuários
            for (let user of usuario.listUsers) {
                // Verifique se o usuário já existe na lista de usuários
                const existingUser = await collection.findOne({ email: user.email });
                if (!existingUser) {
                    // Se o usuário não existir, insira-o na coleção
                    const result = await collection.insertOne(user);
                    console.log('Usuário inserido com sucesso', result.insertedId);
                } else {
                    console.log('O usuário já existe na lista de usuários');
                }
            }
        } catch (error) {
            console.error('Erro ao inserir usuário no banco de dados', error);
        }
    }
}
