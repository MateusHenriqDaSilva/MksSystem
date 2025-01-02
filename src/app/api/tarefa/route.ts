import Tarefa from '../../../class/tarefa'; // Certifique-se de importar a classe correta
import { v4 as uuidv4 } from 'uuid';
import { UUID } from "mongodb";

const tarefa = new Tarefa()

// id: string;
// tarefa: string;
// descricao?: string;
// time?: string;
// ateDias?: number;
// repetir?: boolean;
// estaConcluida?: boolean;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const id = String(uuidv4() as unknown as UUID);
        const tarefaRecebida = String(formData.get('tarefa'));
        const descricao = String(formData.get('descricao'));
        const time = String(formData.get('time'));
        const ateDias = Number(formData.get('ateDias'));
        const repetir = Boolean(formData.get('repetir'));
        const estaConcluida = Boolean(formData.get('estaConcluida'));

        console.log(estaConcluida)

        tarefa.addTarefa(id, tarefaRecebida, descricao, time, ateDias, repetir , estaConcluida);

        return Response.json({ tarefa: tarefa.listTarefa });
    } catch (error) {
        console.error('Erro ao inserir tarefa no banco de dados', error);
        return Response.json({ message: 'Erro ao inserir tarefa no banco de dados' });
    }
}

export async function GET(req: Request) {
    try {
        return Response.json({ tarefa: tarefa.listTarefa });
    } catch (error) {
        console.error('Erro ao obter tarefas do banco de dados', error);
        return Response.json({ message: 'Erro ao obter tarefas do banco de dados' });
    }
}

export async function PUT(req: Request) {
    try {
        const formData = await req.formData();
        const id = String(formData.get('id')); // ID da tarefa a ser atualizada
        const tarefaRecebida = String(formData.get('tarefa'));
        const descricao = String(formData.get('descricao'));
        const time = String(formData.get('time'));
        const ateDias = Number(formData.get('ateDias'));
        const repetir = Boolean(formData.get('repetir'));
        const estaConcluida = formData.get('estaConcluida') == 'false'? false : true;
        console.log("chegou no servidor: "+ estaConcluida)

        // Atualize a tarefa com o ID correspondente
        tarefa.updateTarefa(id, tarefaRecebida, descricao, time, ateDias, repetir, estaConcluida);

        return Response.json({ message: 'Tarefa atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar tarefa no banco de dados', error);
        return Response.json({ message: 'Erro ao atualizar tarefa no banco de dados' });
    }
}

export async function DELETE(req: Request) {
    try {
        const formData = await req.formData();
        const id = String(formData.get('id')); // ID da tarefa a ser removida

        // Remova a tarefa com o ID correspondente
        console.log(id)
        tarefa.deleteTarefa(id);

        return Response.json({ message: 'Tarefa removida com sucesso!' });
    } catch (error) {
        console.error('Erro ao remover tarefa do banco de dados', error);
        return Response.json({ message: 'Erro ao remover tarefa do banco de dados' });
    }
}
