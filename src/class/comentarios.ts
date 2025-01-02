import DatabaseConnection from "./databaseConnection";

export interface Comentario {
    nome: string;
    comentario: string;
    data: Date;
    link: string;
}

export default class Comentarios {
    private comentarios: Comentario[];

    constructor() {
        this.comentarios = [];
    }

    adicionarComentario(nome: string, comentario: string, link: string): void {
        const novoComentario: Comentario = { nome, comentario, data: new Date(), link };
        this.comentarios.push(novoComentario);
    }

    listarComentarios(): Comentario[] {
        return this.comentarios;
    }

    mostrarComentarios(): void {
        this.comentarios.forEach(comentario => {
            console.log(`Nome: ${comentario.nome}`);
            console.log(`Comentário: ${comentario.comentario}`);
            console.log(`Data: ${comentario.data}`);
            console.log(`link: ${comentario.link}`);
            console.log('-------------------');
        });
    }

    async addBaseComentario(nome: string, comentario: string, link: string) {
        const conector = new DatabaseConnection();
        await conector.connect();
        const db = conector.getDb('Portifolio');
        const collection = db.collection('Comentarios');
        try {
            // Se o email não existir, insira-o na coleção
            const comentarioDocument = { nome, comentario, link }; // Crie um objeto com o campo 'email'
            const result = await collection.insertOne(comentarioDocument);
            console.log('Comentario inserido com sucesso', result.insertedId);
        } catch (error) {
            console.error('Erro ao inserir usuário no banco de dados', error);
        }
    }
}
