import Frases, {IFrases} from '@/class/frases';
import { contentFrases } from '@/component/painel/dadosFrases';

const frases = new Frases();
// Exemplo de uso no contexto de uma rota GET
export async function POST(req: Request) {
    try {

        // Verifique se a lista de frases já foi preenchida
        if (frases.consultarFrases().length === 0) {
            contentFrases.forEach((element: any) => {
                frases.criarFrases(element);
            });
        }else {
            console.log('Os cursos já foram adicionados anteriormente.');
        }

        // Retorne a lista de frases
        return Response.json({ frases: frases.consultarFrases() });
    } catch (error) {
        console.error('Erro ao obter frases do banco de dados', error);
        return Response.json({ message: 'Erro ao obter frases do banco de dados' });
    }
}

export async function GET(req: Request) {
    try {
        // Verifique se a lista de cursos já foi preenchida
        if (frases.consultarFrases().length === 0) {
            // Se ainda não foi preenchida, adicione os cursos
            contentFrases.forEach((element: any) => {
                frases.criarFrases(element);
            });
        }

        // Retorne a lista de cursos (curseManager.listCurse)
        return Response.json({ frases: frases.consultarFrases() });
    } catch (error) {
        console.error('Erro ao obter cursos do banco de dados', error);
        return Response.json({ message: 'Erro ao obter cursos do banco de dados' });
    }
}
