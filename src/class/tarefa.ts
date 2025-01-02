export interface ITarefa {
    id: string;
    tarefa: string;
    descricao?: string;
    time?: string;
    data?: Date;
    ateDias?: number;
    dataAtualizacao?: Date;
    repetir?: boolean;
    estaConcluida?: boolean;
}

export default class Tarefa {
    listTarefa: ITarefa[] = [];

    addTarefa(id: string, tarefa: string, descricao?: string, time?: string, ateDias?: number, repetir?: boolean, estaConcluida?: boolean) {
        const newTarefa: ITarefa = {
            id: id,
            tarefa: tarefa,
            descricao: descricao,
            time: time,
            data: new Date(),
            ateDias: ateDias,
            repetir: repetir,
            estaConcluida: estaConcluida,
        };
        // Adiciona uma nova tarefa à lista
        this.listTarefa.push(newTarefa);
    }

    updateTarefa(id: string, novoNome: string, novaDescricao?: string, 
        novoTime?: string, ateDias?: number, repetir?: boolean, estaConcluida?: boolean) {
        const tarefaIndex = this.listTarefa.findIndex((tarefa) => tarefa.id == id);
        if (tarefaIndex !== -1) {
            // Atualize os campos da tarefa
            this.listTarefa[tarefaIndex].tarefa = novoNome;
            this.listTarefa[tarefaIndex].descricao = novaDescricao;
            this.listTarefa[tarefaIndex].time = novoTime;
            this.listTarefa[tarefaIndex].ateDias = ateDias;
            this.listTarefa[tarefaIndex].dataAtualizacao = new Date();
            this.listTarefa[tarefaIndex].repetir = repetir;
            console.log('classe'+ estaConcluida)
            this.listTarefa[tarefaIndex].estaConcluida = estaConcluida;
        } else {
            console.error(`Tarefa com ID ${id} não encontrada.`);
        }
    }

    deleteTarefa(id: string) {
        const tarefaIndex = this.listTarefa.findIndex((tarefa) => tarefa.id == id);
        console.log(id)
        if (tarefaIndex !== -1) {
            // Remova a tarefa da lista
            this.listTarefa.splice(tarefaIndex, 1);
        } else {
            console.error(`Tarefa com ID ${id} não encontrada.`);
        }
    }

    tarefaNaoConcluida() {
        // Filtra as tarefas não concluídas
        return this.listTarefa.filter((tarefa) => !tarefa.estaConcluida);
    }

    tarefaConcluida() {
        // Filtra as tarefas concluídas
        return this.listTarefa.filter((tarefa) => tarefa.estaConcluida);
    }

    getTarefa(): ITarefa[] {
        return this.listTarefa;
    }
}
