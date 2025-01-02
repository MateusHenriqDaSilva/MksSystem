"use client";
import { useState } from 'react'
import styles from '../../../styles/corpoFramework.module.css'
import EstruturaSelecao from '../EstruturaSelecao'

const languages = [
    {
        id: 1,
        title: "React",
        skills: [
            {
                description: `Hooks "useState, useEffect, useContext"`,
            }, {
                description: "Renderização condicional",
            }, {
                description: "HOC (Higher-Order Component)",
            }, {
                description: "Gerenciamento de estado",
            }, {
                description: "SSR (Server-Side Rendering)",
            }, {
                description: "Otimização de desempenho",
            }, {
                description: "Testes",
            }, {
                description: "Design Patterns",
            }
        ]
    }, {
        id: 2,
        title: "Angular",
        skills: [
            {
                description: "Fundamentos do JavaScript",
            }, {
                description: "TypeScript",
            }, {
                description: "Arquitetura de componentes e módulos",
            }, {
                description: "RxJS",
            }, {
                description: "Rotas e navegação",
            }, {
                description: "Injeção de dependência",
            }, {
                description: "Testes",
            }, {
                description: "Animações",
            }, {
                description: "Desempenho",
            }, {
                description: "Boas práticas",
            },
        ]
    }, {
        id: 3,
        title: "Vue.js",
        skills: [
            {
                description: "JavaScript, HTML e CSS",
            }, {
                description: "Arquitetura e padrões de design",
            }, {
                description: "Ferramentas de desenvolvimento",
            }, {
                description: "Práticas recomendadas",
            }, {
                description: "Outras tecnologias relacionadas",
            }
        ]
    }, {
        id: 4,
        title: "Laravel",
        skills: [
            {
                description: "PHP",
            }, {
                description: "HTML e CSS",
            }, {
                description: "Banco de dados",
            }, {
                description: "Arquitetura e padrões de design",
            }, {
                description: "Ferramentas de desenvolvimento",
            }, {
                description: "Práticas recomendadas",
            }
        ]
    }, {
        id: 5,
        title: "Django",
        skills: [
            {
                description: "Python",
            }, {
                description: "Funcionalidades",
            }, {
                description: "HTML, CSS e JavaScript",
            }, {
                description: "Banco de dados",
            }, {
                description: "Arquitetura e padrões de design",
            }, {
                description: "Ferramentas de desenvolvimento",
            }
        ]
    }, {
        id: 6,
        title: "Spring",
        skills: [
            {
                description: "Java",
            }, {
                description: "Funcionalidades",
            }, {
                description: "Bancos de dados relacionais",
            }, {
                description: "Arquitetura e padrões de design",
            }, {
                description: "Ferramentas de desenvolvimento",
            }
        ]
    }, {
        id: 7,
        title: "Express.js",
        skills: [
            {
                description: "JavaScript",
            }, {
                description: "Node.js",
            }, {
                description: "Funcionalidades",
            }, {
                description: "Bancos de dados",
            }, {
                description: "APIs RESTful",
            }, {
                description: "Ferramentas de desenvolvimento",
            }
        ]
    }, {
        id: 8,
        title: "ASP.NET",
        skills: [
            {
                description: "C#",
            }, {
                description: ".NET Framework",
            }, {
                description: "Funcionalidades",
            }, {
                description: "Bancos de dados relacionais",
            }, {
                description: "Arquitetura e padrões de design",
            }
        ]
    }
]

export default function CorpoFramework() {
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
                            languages.map((elemento) => (<h1 key={elemento.id} className={styles.label}>{elemento.title}</h1>))
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
                        <EstruturaSelecao id={languages[0].id} title={languages[0].title} skills={languages[0].skills} />
                    }{popUp2 &&
                        <EstruturaSelecao id={languages[1].id} title={languages[1].title} skills={languages[1].skills} />
                    }{popUp3 &&
                        <EstruturaSelecao id={languages[2].id} title={languages[2].title} skills={languages[2].skills} />
                    }{popUp4 &&
                        <EstruturaSelecao id={languages[3].id} title={languages[3].title} skills={languages[3].skills} />
                    }{popUp5 &&
                        <EstruturaSelecao id={languages[4].id} title={languages[4].title} skills={languages[4].skills} />
                    }{popUp6 &&
                        <EstruturaSelecao id={languages[5].id} title={languages[5].title} skills={languages[5].skills} />
                    }{popUp7 &&
                        <EstruturaSelecao id={languages[6].id} title={languages[6].title} skills={languages[6].skills} />
                    }{popUp8 &&
                        <EstruturaSelecao id={languages[7].id} title={languages[7].title} skills={languages[7].skills} />
                    }
                </div>
            </div >
        </div>
    )
}


