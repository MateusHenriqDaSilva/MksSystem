import ColetarEmail from "@/class/coletarEmail";

const coletarEmail = new ColetarEmail()

export async function POST(req: Request) {
    const formData = await req.formData()
    const email = String(formData.get('email'))

    try {
        // Verifique se a lista de cursos já foi preenchida
        if (coletarEmail.listEmail.length === 0) {
            // Se ainda não foi preenchida, adicione os cursos
            coletarEmail.addListEmail(email);
            coletarEmail.addBaseEmail(email)
        } else {
            console.log('E-mail ja cadastrado.');
        }

        // Retorne a lista de cursos (curseManager.listCurse)
        return Response.json({ curse: coletarEmail.getEmails });
    } catch (error) {
        console.error('Erro ao inserir usuário no banco de dados', error);
        return Response.json({ message: 'Erro ao inserir usuário no banco de dados' });
    }
}

export async function GET(req: Request) {
    try {
        const emails = await coletarEmail.getAllEmailFromDB()
        return Response.json({ emails });
    } catch (error) {
        console.error('Erro ao obter cursos do banco de dados', error);
        return Response.json({ message: 'Erro ao obter cursos do banco de dados' });
    }
}