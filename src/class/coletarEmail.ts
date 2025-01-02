import DatabaseConnection from "./databaseConnection";

export default class ColetarEmail {
    public listEmail: string[] = [];

    addListEmail(email: string) {
        // Verifica se o email já está na lista
        if (this.listEmail.includes(email)) {
            console.log("E-mail já cadastrado!");
        } else {
            this.listEmail.push(email);
            console.log("E-mail adicionado com sucesso!");
        }
    }

    async addBaseEmail(email: string) {
        const conector = new DatabaseConnection();
        await conector.connect();
        const db = conector.getDb('Portifolio');
        const collection = db.collection('Emails');
        try {
            // Verifique se o email já existe na coleção
            const existingEmail = await collection.findOne({ email });
            if (!existingEmail) {
                // Se o email não existir, insira-o na coleção
                const emailDocument = { email }; // Crie um objeto com o campo 'email'
                const result = await collection.insertOne(emailDocument);
                console.log('E-mail inserido com sucesso', result.insertedId);
            } else {
                console.log('E-mail já existe cadastrado');
            }
        } catch (error) {
            console.error('Erro ao inserir e-mail no banco de dados', error);
        }
    }

    async getAllEmailFromDB() {
        const conector = new DatabaseConnection();
        await conector.connect();
        const db = conector.getDb('Portifolio');
        const collection = db.collection('Emails');
        const emailsColetados = new ColetarEmail();
        try {
            const email = await collection.find().toArray();
            email.forEach((email: any) => {
                const newEmail: any = {
                    id: email.id,
                    email: email.email,
                };
                emailsColetados.listEmail.push(newEmail); // Adicione os usuários à lista desta instância
            });
            return emailsColetados.listEmail; // Retorne a lista desta instância
        } catch (error) {
            console.error('Erro ao obter emails do banco de dados', error);
        }
    }

    getEmails() {
        return this.listEmail
    }
}
