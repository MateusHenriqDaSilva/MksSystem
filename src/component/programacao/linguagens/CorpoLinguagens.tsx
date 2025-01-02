"use client";
import { useState } from 'react'
import styles from '../../../styles/CorpoLinguagens.module.css'
import EstruturaSelecao from '../EstruturaSelecao'

const Linguagens = [
    {
        id: 1,
        title: "HTML",
        skills: [
            {
                description: "Sintaxe do HTML",
                link: "/programacao/postagem/1",
            }, {
                description: "Estrutura do documento",
                link: "/programacao/postagem/2",
            }, {
                description: "Tags e atributos",
                link: "/programacao/postagem/3",
            }, {
                description: "Semântica do HTML",
                link: "/programacao/postagem/4",
            }, {
                description: "CSS",
                link: "/programacao/postagem/7",
            }, {
                description: "Acessibilidade",
            }, {
                description: "SEO",
            }, {
                description: "Responsividade",
                link: "/programacao/postagem/8",
            }, {
                description: "Boas práticas de programação:",
            }
        ]
    }, {
        id: 2,
        title: "CSS",
        skills: [
            {
                description: "Box model",
            }, {
                description: "Seletores",
            }, {
                description: "Propriedades CSS",
            }, {
                description: "Layouts",
            }, {
                description: "Posicionamento",
            }, {
                description: "Flexbox",
            }, {
                description: "Animações e transições",
            }, {
                description: "Pré-processadores CSS",
            }, {
                description: "Metodologias CSS",
            }, {
                description: "Boas práticas de programação",
            },
        ]
    }, {
        id: 3,
        title: "Javascript",
        skills: [
            {
                description: "DOM",
            }, {
                description: "Eventos",
            }, {
                description: "Manipulação de elementos HTML",
            }, {
                description: "AJAX",
            }, {
                description: "jQuery",
            }, {
                description: "JSON",
            }
        ]
    }, {
        id: 4,
        title: "Typescript",
        skills: [
            {
                description: "JavaScript",
            }, {
                description: "Sintaxe do TypeScript",
            }, {
                description: "Tipos de dados e declarações de tipos",
            }, {
                description: "Interfaces e classes",
            }, {
                description: "Módulos e namespaces",
            }, {
                description: "Generics",
            }, {
                description: "Decoradores",
            }, {
                description: "Ferramentas de desenvolvimento",
            }, {
                description: "Conhecimento de bibliotecas e frameworks",
            }, {
                description: "Boas práticas de programação",
            }
        ]
    }, {
        id: 5,
        title: "Python",
        skills: [
            {
                description: "Sintaxe básica de Python",
            }, {
                description: "Bibliotecas e módulos padrão do Python",
            }, {
                description: "Estruturas de dados em Python",
            }, {
                description: "Programação orientada a objetos em Python",
            }, {
                description: "Bibliotecas populares em Python",
            }, {
                description: "Testes e depuração em Python",
            }, {
                description: "Boas práticas de codificação em Python",
            }
        ]
    }, {
        id: 6,
        title: "Java",
        skills: [
            {
                description: "Sintaxe básica de Java",
            }, {
                description: "Programação orientada a objetos em Java",
            }, {
                description: "Estruturas de dados em Java",
            }, {
                description: "Bibliotecas padrão do Java",
            }, {
                description: "Desenvolvimento de aplicativos da web em Java",
            }, {
                description: "Desenvolvimento de aplicativos desktop em Java",
            }, {
                description: "Concorrência e paralelismo em Java",
            }, {
                description: "Testes e depuração em Java",
            }, {
                description: "Boas práticas de codificação em Java",
            },
        ]
    }, {
        id: 7,
        title: "PHP",
        skills: [
            {
                description: "Fundamentos do PHP",
            }, {
                description: "Orientação a objetos",
            }, {
                description: "Frameworks PHP",
            }, {
                description: "Banco de dados",
            }, {
                description: "HTML, CSS e JavaScript",
            }, {
                description: "Testes",
            }, {
                description: "APIs",
            }, {
                description: "Segurança",
            },
        ]
    }, {
        id: 8,
        title: "C#",
        skills: [
            {
                description: "Programação orientada a objetos (POO)",
            }, {
                description: "Frameworks e bibliotecas",
            }, {
                description: "Desenvolvimento de aplicações web",
            }, {
                description: "Banco de dados",
            }, {
                description: "Padrões de design",
            }, {
                description: "Boas práticas de codificação",
            }
        ]
    }
]

export default function CorpoLinguagens() {
    const [popUp1, setPopUp1] = useState(true)
    const [popUp2, setPopUp2] = useState(false)
    const [popUp3, setPopUp3] = useState(false)
    const [popUp4, setPopUp4] = useState(false)
    const [popUp5, setPopUp5] = useState(false)
    const [popUp6, setPopUp6] = useState(false)
    const [popUp7, setPopUp7] = useState(false)
    const [popUp8, setPopUp8] = useState(false)

    const divStyles1 = {
        boxShadow: popUp1 ? "0px 0px 6px black" : "none",
    }
    const divStyles2 = {
        boxShadow: popUp2 ? "0px 0px 6px black" : "none",
    }
    const divStyles3 = {
        boxShadow: popUp3 ? "0px 0px 6px black" : "none",
    }
    const divStyles4 = {
        boxShadow: popUp4 ? "0px 0px 6px black" : "none",
    }
    const divStyles5 = {
        boxShadow: popUp5 ? "0px 0px 6px black" : "none",
    }
    const divStyles6 = {
        boxShadow: popUp6 ? "0px 0px 6px black" : "none",
    }
    const divStyles7 = {
        boxShadow: popUp7 ? "0px 0px 6px black" : "none",
    }
    const divStyles8 = {
        boxShadow: popUp8 ? "0px 0px 6px black" : "none",
    }

    function movimentoBotao1() {
        setPopUp1(!popUp1)
        setPopUp2(false)
        setPopUp3(false)
        setPopUp4(false)
        setPopUp5(false)
        setPopUp6(false)
        setPopUp7(false)
        setPopUp8(false)
    }
    function movimentoBotao2() {
        setPopUp1(false)
        setPopUp2(!popUp2)
        setPopUp3(false)
        setPopUp4(false)
        setPopUp5(false)
        setPopUp6(false)
        setPopUp7(false)
        setPopUp8(false)
    }
    function movimentoBotao3() {
        setPopUp1(false)
        setPopUp2(false)
        setPopUp3(!popUp3)
        setPopUp4(false)
        setPopUp5(false)
        setPopUp6(false)
        setPopUp7(false)
        setPopUp8(false)
    }
    function movimentoBotao4() {
        setPopUp1(false)
        setPopUp2(false)
        setPopUp3(false)
        setPopUp4(!popUp4)
        setPopUp5(false)
        setPopUp6(false)
        setPopUp7(false)
        setPopUp8(false)
    }
    function movimentoBotao5() {
        setPopUp1(false)
        setPopUp2(false)
        setPopUp3(false)
        setPopUp4(false)
        setPopUp5(!popUp5)
        setPopUp6(false)
        setPopUp7(false)
        setPopUp8(false)
    }
    function movimentoBotao6() {
        setPopUp1(false)
        setPopUp2(false)
        setPopUp3(false)
        setPopUp4(false)
        setPopUp5(false)
        setPopUp6(!popUp6)
        setPopUp7(false)
        setPopUp8(false)
    }
    function movimentoBotao7() {
        setPopUp1(false)
        setPopUp2(false)
        setPopUp3(false)
        setPopUp4(false)
        setPopUp5(false)
        setPopUp6(false)
        setPopUp7(!popUp7)
        setPopUp8(false)
    }
    function movimentoBotao8() {
        setPopUp1(false)
        setPopUp2(false)
        setPopUp3(false)
        setPopUp4(false)
        setPopUp5(false)
        setPopUp6(false)
        setPopUp7(false)
        setPopUp8(!popUp8)
    }

    return (
        <div className={styles.containerGlobal}>
            <div className={styles.borda}></div>
            <h1 className={styles.titulo}>Hard Skill</h1>
            <div className={styles.containerEspaco}>
                <div className={styles.containerLabels}>
                    <div className={styles.coluna1}>
                        {
                            Linguagens.map((elemento) => (<h1 key={elemento.id} className={styles.label}>{elemento.title}</h1>))
                        }
                    </div>
                    <div className={styles.coluna2}>
                        <div style={divStyles1} className={styles.barras} onClick={movimentoBotao1}><div className={styles.porcentagemBarra1}></div></div>
                        <div style={divStyles2} className={styles.barras} onClick={movimentoBotao2}><div className={styles.porcentagemBarra2}></div></div>
                        <div style={divStyles3} className={styles.barras} onClick={movimentoBotao3}><div className={styles.porcentagemBarra3}></div></div>
                        <div style={divStyles4} className={styles.barras} onClick={movimentoBotao4}><div className={styles.porcentagemBarra4}></div></div>
                        <div style={divStyles5} className={styles.barras} onClick={movimentoBotao5}><div className={styles.porcentagemBarra5}></div></div>
                        <div style={divStyles6} className={styles.barras} onClick={movimentoBotao6}><div className={styles.porcentagemBarra6}></div></div>
                        <div style={divStyles7} className={styles.barras} onClick={movimentoBotao7}><div className={styles.porcentagemBarra7}></div></div>
                        <div style={divStyles8} className={styles.barras} onClick={movimentoBotao8}><div className={styles.porcentagemBarra8}></div></div>
                    </div>
                </div>
                <div className={styles.containerSkills}>
                    {popUp1 &&
                        <EstruturaSelecao id={Linguagens[0].id} title={Linguagens[0].title} skills={Linguagens[0].skills} />
                    }{popUp2 &&
                        <EstruturaSelecao id={Linguagens[1].id} title={Linguagens[1].title} skills={Linguagens[1].skills} />
                    }{popUp3 &&
                        <EstruturaSelecao id={Linguagens[2].id} title={Linguagens[2].title} skills={Linguagens[2].skills} />
                    }{popUp4 &&
                        <EstruturaSelecao id={Linguagens[3].id} title={Linguagens[3].title} skills={Linguagens[3].skills} />
                    }{popUp5 &&
                        <EstruturaSelecao id={Linguagens[4].id} title={Linguagens[4].title} skills={Linguagens[4].skills} />
                    }{popUp6 &&
                        <EstruturaSelecao id={Linguagens[5].id} title={Linguagens[5].title} skills={Linguagens[5].skills} />
                    }{popUp7 &&
                        <EstruturaSelecao id={Linguagens[6].id} title={Linguagens[6].title} skills={Linguagens[6].skills} />
                    }{popUp8 &&
                        <EstruturaSelecao id={Linguagens[7].id} title={Linguagens[7].title} skills={Linguagens[7].skills} />
                    }
                </div>
            </div >
        </div>
    )
}


