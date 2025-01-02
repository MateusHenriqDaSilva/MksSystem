import Usuario from '../../../class/usuario';

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const nome = formData.get('nome')
        const email = formData.get('email')
        const senha = formData.get('senha')
        const dataNascimento = formData.get('dataNascimento')
        const sexo = formData.get('sexo')
        const user = new Usuario()
        user.addUsersList(nome, email, senha, dataNascimento, sexo)
        console.log(user)
        await Usuario.addUserBase(user);
        return Response.json({ user })
    } catch (error) {
        console.error('Erro ao inserir usuário no banco de dados', error);
        return Response.json({ message: 'Erro ao inserir usuário no banco de dados' });
    }
}

export async function GET(req: Request) {
    try {
        const users = await Usuario.getAllUsersFromDB(); // Chama a função getArray para obter a lista de usuários
        return Response.json({ users }); // Retorna a lista de usuários
    } catch (error) {
        console.error('Erro ao obter usuários do banco de dados', error);
        return Response.json({ message: 'Erro ao obter usuários do banco de dados' });
    }
}