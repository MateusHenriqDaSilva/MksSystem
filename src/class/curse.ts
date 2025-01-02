
export interface IEpisodio {
    id: number
    title: string
    descricao?: string
    img?: any
    video?: any
}
export interface IModulo {
    id: number
    title: string
    episodio?: IEpisodio[]
}

export interface ICurse {
    id: number;
    title: string;
    description: string;
    link?: string;
    img?: any;
    video?: any;
    porcent?: number;
    estaAtivo: boolean;
    pago?: boolean;
    price?: number;
    modulo?: IModulo[]
}

export default class Curse {
    public listCurse: ICurse[] = [];

    addCurseList(curse: ICurse) {
        this.listCurse.push(curse);
    }

    getCourses(): ICurse[] {
        return this.listCurse;
    }
}