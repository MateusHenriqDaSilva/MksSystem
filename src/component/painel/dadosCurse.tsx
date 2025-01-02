import Image from '../../../public/virus.png'
import virus1 from '../../../public/virus1.png'
import virus2 from '../../../public/virus2.png'
import virus3 from '../../../public/virus3.png'
import virus4 from '../../../public/virus4.png'
import virus5 from '../../../public/virus5.png'
import virus6 from '../../../public/virus6.png'


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

export const contentCurse: ICurse[] = [
    {
        id: 1,
        title: "Selecione um item",
        description: "Mundo oculto: A batalha invisível",
        link: 'teste',
        img: Image,
        porcent: 75,
        estaAtivo: true
    }, {
        id: 2,
        title: "Mundo Vírus",
        description: "Mundo oculto: A batalha invisível",
        link: 'teste',
        img: Image,
        video: "https://drive.google.com/file/d/1UxUEI1HUTu_Bw0WHfMqLrCdLltMsSIxy/preview",
        porcent: 75,
        estaAtivo: false,
        pago: false,
        price: 10.00,
        modulo: [
            {
                id: 1,
                title: "A descoberta da virosfera",
                episodio: [
                    {
                        id: 1,
                        title: "Desvendando o Microcosmo Contagioso",
                        descricao: "Aprenda as tags essenciais do HTML.",
                        img: virus1,
                        video: "https://drive.google.com/file/d/1NFaQ2jGuE21kTnQ1NpnfdGYzCaNF5qQH/preview"
                    }, {
                        id: 2,
                        title: "Mundo oculto: A batalha invisível",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus2,
                        video: "https://drive.google.com/file/d/1UxUEI1HUTu_Bw0WHfMqLrCdLltMsSIxy/preview"
                    },
                    {
                        id: 3,
                        title: "Treinadores Invisíveis",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus3,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 4,
                        title: "A Verdade Obscura por Trás da Gripe",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus4,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 5,
                        title: "Como os anticorpos entram em cena",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus5,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 6,
                        title: "Pássaros aos Humanos",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus6,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }
                ]
            },{
                id: 2,
                title: "biologia molecular dos vírus",
                episodio: [
                    {
                        id: 7,
                        title: "Estrutura básica do HTML",
                        descricao: "Aprenda as tags essenciais do HTML.",
                        img: virus1,
                        video: "https://www.example.com/videos/html_tags.mp4"
                    },
                    {
                        id: 8,
                        title: "Formulários e inputs",
                        descricao: "Crie formulários interativos com HTML.",
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 9,
                        title: "Estruturas e contextos",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus1,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 10,
                        title: "Estruturas e contextos",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus1,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 11,
                        title: "Estruturas e contextos",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus1,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 12,
                        title: "Estruturas e contextos",
                        descricao: "Crie formulários interativos com HTML.",
                        video: "https://www.example.com/videos/html_forms.mp4"
                    },
                ]
            },
        ]
    }, {
        id: 3,
        title: "Desenvolvimento Web",
        description: "Aprenda a criar sites incríveis!",
        link: "https://www.example.com/cursos/webdev",
        img: virus1,
        video: "https://drive.google.com/file/d/1UxUEI1HUTu_Bw0WHfMqLrCdLltMsSIxy/preview",
        porcent: 75,
        estaAtivo: false,
        pago: true,
        price: 30.00,
        modulo: [
            {
                id: 1,
                title: "Introdução ao HTML",
                episodio: [
                    {
                        id: 1,
                        title: "Estrutura básica do HTML",
                        descricao: "Aprenda as tags essenciais do HTML.",
                        img: virus1,
                        video: "https://www.example.com/videos/html_tags.mp4"
                    },
                    {
                        id: 2,
                        title: "Formulários e inputs",
                        descricao: "Crie formulários interativos com HTML.",
                        video: "https://www.example.com/videos/html_forms.mp4"
                    }, {
                        id: 3,
                        title: "Estruturas e contextos",
                        descricao: "Crie formulários interativos com HTML.",
                        img: virus1,
                        video: "https://www.example.com/videos/html_forms.mp4"
                    },
                ]
            },
            {
                id: 2,
                title: "CSS Avançado",
                episodio: [
                    {
                        id: 3,
                        title: "Flexbox e Grid",
                        descricao: "Domine layouts responsivos com CSS.",
                        video: "https://www.example.com/videos/css_flexgrid.mp4"
                    },
                    {
                        id: 4,
                        title: "Animações e Transições",
                        descricao: "Dê vida aos seus elementos com CSS.",
                        video: "https://www.example.com/videos/css_animations.mp4"
                    }
                ]
            }
        ]
    }
]

