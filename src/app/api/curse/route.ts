import Curse from '@/class/curse';
import { contentCurse } from '../../../component/painel/dadosCurse'
import { ICurse } from '../../../component/painel/dadosCurse';

const curse = new Curse()

export async function POST(req: Request) {
    try {
        // Verifique se a lista de cursos já foi preenchida
        if (curse.listCurse.length === 0) {
            // Se ainda não foi preenchida, adicione os cursos
            contentCurse.forEach((element: ICurse) => {
                curse.addCurseList(element);
            });
        } else {
            console.log('Os cursos já foram adicionados anteriormente.');
        }

        // Retorne a lista de cursos (curseManager.listCurse)
        return Response.json({ curse: curse.listCurse });
    } catch (error) {
        console.error('Erro ao inserir usuário no banco de dados', error);
        return Response.json({ message: 'Erro ao inserir usuário no banco de dados' });
    }
}


export async function GET(req: Request) {
    try {
        // Verifique se a lista de cursos já foi preenchida
        if (curse.listCurse.length === 0) {
            // Se ainda não foi preenchida, adicione os cursos
            contentCurse.forEach((element: ICurse) => {
                curse.addCurseList(element);
            });
        }

        // Retorne a lista de cursos (curseManager.listCurse)
        return Response.json({ curse: curse.listCurse });
    } catch (error) {
        console.error('Erro ao obter cursos do banco de dados', error);
        return Response.json({ message: 'Erro ao obter cursos do banco de dados' });
    }
}
