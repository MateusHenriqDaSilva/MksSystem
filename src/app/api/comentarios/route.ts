import Comentarios from "@/class/comentarios";

const comentarios = new Comentarios();
// Exemplo de uso no contexto de uma rota GET
export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const nome = formData.get('nome')
        const comentario = formData.get('comentario')
        const link = formData.get('link')

        comentarios.adicionarComentario(String(nome), String(comentario), String(link))
        comentarios.addBaseComentario(String(nome), String(comentario), String(link))
        comentarios.mostrarComentarios();

        // Retorne a lista de frases
        return Response.json({ comentarios: comentarios.listarComentarios() });
    } catch (error) {
        console.error('Erro ao obter frases do banco de dados', error);
        return Response.json({ message: 'Erro ao obter frases do banco de dados' });
    }
}

export async function GET(req: Request) {
    try {

        // Retorne a lista de cursos (curseManager.listCurse)
        return Response.json({ comentarios: comentarios.listarComentarios() });
    } catch (error) {
        console.error('Erro ao obter cursos do banco de dados', error);
        return Response.json({ message: 'Erro ao obter cursos do banco de dados' });
    }
}
