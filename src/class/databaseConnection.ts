import { MongoClient } from 'mongodb';

export default class DatabaseConnection {
    private uri = 'mongodb+srv://mateus:sdwez6bp@cluster0.beiyeey.mongodb.net/?authSource=Portifolio&authMechanism=SCRAM-SHA-1';
    private client: MongoClient;

    constructor() {
        this.client = new MongoClient(this.uri);
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Conexão com o banco de dados estabelecida com sucesso');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados', error);
        }
    }

    getDb(dbName: string) {
        return this.client.db(dbName);
    }
}
