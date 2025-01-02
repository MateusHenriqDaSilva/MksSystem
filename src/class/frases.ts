export interface IFrases {
    id: number;
    autor?: string;
    frase?: string;
}

export default class Frases {
    private listFrase: IFrases[] = [];

    criarFrases(id: number, autor?: string, frase?: string) {
        // Adicionar uma nova frase à lista
        this.listFrase.push({ id, autor, frase});
    }

    consultarFrases() {
        // Retornar todas as frases da lista
        return this.listFrase;
    }
}
