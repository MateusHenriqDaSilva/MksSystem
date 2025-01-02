"use client";
import styles from '../../styles/painel.module.css'
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image'
import { ICurse } from '../../component/painel/dadosCurse'
import { useEffect, useState } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import { ITarefa } from '@/class/tarefa';
import SkeletonPainel from '../../component/SkeletonPainel'
import { IoTrashBin } from "react-icons/io5";
import Config from './config/page';
import PerfilUsuario from './perfil/page';

type ActiveIcon = 'add' | 'edit' | 'delete';

export default function Painel() {
    const [selectedCourses, setSelectedCourses] = useState<ICurse[]>([]);
    const [listCourses, setListCourses] = useState<ICurse[]>([]);
    const [listTarefa, setListTarefa] = useState<ITarefa[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalPerfilOpen, setIsModalPerfilOpen] = useState(false);
    const [isModalConfigOpen, setIsModalConfigOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [novaTarefa, setNovaTarefa] = useState({
        tarefa: '',
        descricao: '',
        time: '',
        ateDias: 0,
        repetir: false,
        estaConcluida: false,
    });

    const [tarefaEditada, setTarefaEditada] = useState({
        id: '',
        tarefa: '',
        descricao: '',
        time: '',
        ateDias: 0,
        repetir: false,
        estaConcluida: false,
    });
    const [fraseDia, setFraseDia] = useState({ frase: '', autor: '' });
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(true);
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(true);
    const [isConcluidoButtonDisabled, setIsConcluidoButtonDisabled] = useState(false);
    const [activeIcon, setActiveIcon] = useState<ActiveIcon | null>(null);
    const [bordaAtiva, setBordaAtiva] = useState(null); // Estado para controlar a borda ativa
    const [deleteId, setDeletId] = useState(null)
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [conteudoAtivo, setConteudoAtivo] = useState('meusCursos'); // Estado para controlar o conteúdo ativo

    const handleItemClick = (tipo: any) => {
        // Atualiza o estado com o tipo de conteúdo selecionado
        setConteudoAtivo(tipo);
    };

    const handleButtonClick = () => {
        // Alterna o estado do botão quando clicado
        setIsActive(!isActive);
        if (isActive == true) {
            setIsAddButtonDisabled(false)
        } else {
            setIsAddButtonDisabled(true)
        }
    };

    const handleOpenModel = () => {
        // Verifica se o modal já está aberto
        if (!isModalOpen) {
            setActiveIcon('add');
            setIsModalOpen(true); // Abre o modal ao clicar no ícone de adição
            setIsConcluidoButtonDisabled(false)
        } else {
            setIsModalOpen(false);
            setActiveIcon(null);
            setIsConcluidoButtonDisabled(false)
        }
    };

    const handleOpenModelEdit = () => {
        // Verifica se o modal já está aberto
        if (!isEditModalOpen) {
            setActiveIcon('edit');
            setIsEditModalOpen(true); // Abre o modal ao clicar no ícone de adição
            setIsDeleteButtonDisabled(true)
            setIsConcluidoButtonDisabled(false)
        } else {
            setIsEditModalOpen(false);
            setActiveIcon(null);
            setIsDeleteButtonDisabled(false)
            setIsConcluidoButtonDisabled(true)
        }
    };

    const handleInputAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Atualize o estado apenas para o campo específico que está sendo alterado
        setNovaTarefa((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // ADD
    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        const tarefa = novaTarefa.tarefa;
        const descricao = novaTarefa.descricao;
        const time = novaTarefa.time;
        const ateDias = novaTarefa.ateDias;
        const repetir = novaTarefa.repetir;
        const estaConcluida = novaTarefa.estaConcluida;

        try {
            const formData = new FormData();
            formData.append('tarefa', tarefa);
            formData.append('descricao', descricao);
            formData.append('time', String(time));
            formData.append('ateDias', String(ateDias));
            formData.append('repetir', String(repetir));
            formData.append('ateDias', String(estaConcluida));

            const response = await fetch('/api/tarefa', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao inserir tarefa no banco de dados', error);
        }

        // Limpe o estado após adicionar a tarefa (ou faça isso onde você lida com a lógica de adição)
        setNovaTarefa({
            tarefa: '',
            descricao: '',
            time: '',
            ateDias: 0,
            estaConcluida: false,
            repetir: false
        });
        setIsModalOpen(false);
        setActiveIcon(null);
        consultarAPITarefa()
    };

    // EDIT
    const handleFormEdit = async (event: any) => {
        event.preventDefault();

        const id = tarefaEditada.id;
        const tarefa = tarefaEditada.tarefa;
        const descricao = tarefaEditada.descricao;
        const time = tarefaEditada.time;
        const ateDias = tarefaEditada.ateDias
        const repetir = tarefaEditada.repetir
        const estaConcluida = tarefaEditada.estaConcluida

        try {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('tarefa', tarefa);
            formData.append('descricao', descricao);
            formData.append('time', String(time));
            formData.append('ateDias', String(ateDias));
            formData.append('repetir', String(repetir));
            formData.append('estaConcluida', String(estaConcluida));

            const response = await fetch(`/api/tarefa`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao editar a tarefa no banco de dados', error);
        }
        setIsEditModalOpen(false)
        setIsDeleteButtonDisabled(true)
        setIsEditButtonDisabled(true)
        setIsAddButtonDisabled(false)
        setIsConcluidoButtonDisabled(false)
        setBordaAtiva(null);
        consultarAPITarefa()
    }

    async function consultarAPICurse() {
        try {
            const response = await fetch('http://localhost:3000/api/curse');
            const data = await response.json();
            const coursesArray = data.curse.map((element: any) => {
                // Process each element as needed
                return element;
            });
            setListCourses(coursesArray);

        } catch (error) {
            console.error('Erro ao consultar a API:', error);
        }
    }

    async function consultarAPIFrases() {
        try {
            const response = await fetch('http://localhost:3000/api/frases');
            const data = await response.json();
            const frasesArray = data.frases.map((element: any) => {
                // Process each element as needed
                return element;
            });
            const fraseAleatoria = frasesArray[Math.floor(Math.random() * frasesArray.length)];
            const { frase, autor } = fraseAleatoria.id
            setFraseDia({ frase: frase, autor: autor })
        } catch (error) {
            console.error('Erro ao consultar a API:', error);
        }
    }

    useEffect(() => {
        consultarAPICurse();
        consultarAPITarefa();
        consultarAPIFrases();

        setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);
    }, []); // A lista de dependências está vazia para que o efeito seja executado apenas uma vez

    async function consultarAPITarefa() {
        try {
            const response = await fetch('http://localhost:3000/api/tarefa'); // Substitua pela URL correta da sua API de tarefas
            const data = await response.json();
            const tarefasArray = data.tarefa.map((element: any) => {
                return element;
            });
            setListTarefa(tarefasArray)
        } catch (error) {
            console.error('Erro ao consultar a API de tarefas:', error);
        }
    }

    let elementoAtual: HTMLElement | null = null; // Variável para armazenar o elemento atualmente sendo arrastado

    function dragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function dragStart(e: React.DragEvent) {
        elementoAtual = e.target as HTMLElement; // Define o elemento atual no início do arrasto
        const style = window.getComputedStyle(elementoAtual, null);
        e.dataTransfer.setData(
            'text/plain',
            (parseInt(style.getPropertyValue('left'), 10) - e.clientX) + ',' + (parseInt(style.getPropertyValue('top'), 10) - e.clientY)
        );
    }

    function drop(e: React.DragEvent) {
        e.preventDefault();
        const offset = e.dataTransfer.getData('text/plain').split(',');

        const container = document.getElementsByClassName(styles.containerCenter)[0];
        const containerRect = container.getBoundingClientRect();

        let newLeft = e.clientX + parseInt(offset[0], 10);
        let newTop = e.clientY + parseInt(offset[1], 10);

        newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - elementoAtual!.offsetWidth));
        newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - elementoAtual!.offsetHeight));

        elementoAtual!.style.left = newLeft + 'px';
        elementoAtual!.style.top = newTop + 'px';

        // Verifique se o elemento foi solto sobre a lixeira
        const trashIconRect = document.getElementsByClassName(styles.apagar)[0].getBoundingClientRect();
        if (newLeft >= trashIconRect.left && newLeft <= trashIconRect.right && newTop >= trashIconRect.top && newTop <= trashIconRect.bottom) {
            // Remova o curso do array selectedCourses
            const courseId = parseInt(elementoAtual!.getAttribute('data-course-id') || '', 10);
            setSelectedCourses(selectedCourses.filter((curso) => curso.id !== courseId));
        }

        elementoAtual = null; // Limpa a referência após o drop
    }


    function criarItemFluxo(curso: ICurse) {
        if (!curso.estaAtivo) {
            return (
                <div
                    key={curso.id}
                    className={styles.draggableSquare}
                    draggable="true"
                    onDragStart={dragStart}
                    data-course-id={curso.id} // Adicione um atributo para identificar o curso
                >
                    <h3 className={styles.tituloCurse}>{curso.title}</h3>
                    <p className={styles.descriptionCurse}>{curso.description}</p>
                </div>
            );
        } else {
            return null; // ou outro componente apropriado
        }
    }

    const handleEditClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveIcon('edit');
        setIsEditModalOpen(true)

        const { name, value } = event.target;

        // Atualize o estado apenas para o campo específico que está sendo alterado
        setTarefaEditada((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDivClick = (id: any) => {

        const tarefaClicada = listTarefa.find((tarefa) => tarefa.id == id);

        if (tarefaClicada) {
            setTarefaEditada({
                id: String(tarefaClicada.id),
                tarefa: tarefaClicada.tarefa,
                descricao: tarefaClicada.descricao || '', // Inicialize com uma string vazia
                time: tarefaClicada.time || '', // Inicialize com uma string vazia
                ateDias: tarefaClicada.ateDias || 0,
                repetir: tarefaClicada.repetir || false,
                estaConcluida: tarefaClicada.estaConcluida || false,
            });
            setDeletId(id)
        }

        if (bordaAtiva == id && isActive == false) {
            setBordaAtiva(null); // Se já estiver ativo, desativa a borda
            setIsEditButtonDisabled(true)
            setIsDeleteButtonDisabled(true)
            setIsAddButtonDisabled(false)
            setIsConcluidoButtonDisabled(false)
        } else if (bordaAtiva == id && isActive == true) {
            setBordaAtiva(null); // Define a borda ativa com o ID da tarefa clicada
            setIsEditButtonDisabled(true)
            setIsDeleteButtonDisabled(true)
            setIsAddButtonDisabled(true)
            setIsConcluidoButtonDisabled(false)
        }
        else if (bordaAtiva !== id && isActive == true) {
            setBordaAtiva(id); // Define a borda ativa com o ID da tarefa clicada
            setIsEditButtonDisabled(true)
            setIsDeleteButtonDisabled(false)
            setIsAddButtonDisabled(true)
            setIsConcluidoButtonDisabled(true)
        } else {
            setBordaAtiva(id); // Define a borda ativa com o ID da tarefa clicada
            setIsEditButtonDisabled(false)
            setIsDeleteButtonDisabled(false)
            setIsAddButtonDisabled(true)
            setIsConcluidoButtonDisabled(true)
        }
    };

    const handleDeleteClick = async () => {
        setActiveIcon('delete');
        try {
            const formData = new FormData();
            formData.append('id', String(deleteId));

            const response = await fetch('/api/tarefa', {
                method: 'DELETE',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao editar a tarefa no banco de dados', error);
        }
        setIsDeleteButtonDisabled(true)
        setIsEditButtonDisabled(true)
        setIsAddButtonDisabled(false)
        setIsConcluidoButtonDisabled(false)
        setIsActive(false)
        consultarAPITarefa()
    };

    function concluirTarefa(id: any) {
        listTarefa.find((tarefa) => tarefa.id == id ?
            setTarefaEditada({
                id: String(tarefa.id),
                tarefa: tarefa.tarefa,
                descricao: tarefa.descricao || '', // Inicialize com uma string vazia
                time: tarefa.time || '', // Inicialize com uma string vazia
                ateDias: tarefa.ateDias || 0,
                repetir: tarefa.repetir || false,
                estaConcluida: tarefa.estaConcluida = true
            }) : null)
        handleFormEdit(event)
    }

    const handlePerfilOpenModal = () => {
        setIsModalPerfilOpen(true);
        console.log(isModalPerfilOpen)
    };

    const handlePerfilCloseModal = () => {
        setIsModalPerfilOpen(false);
        console.log(isModalPerfilOpen)
    };

    const handleConfigOpenModal = () => {
        setIsModalConfigOpen(true);
        console.log(isModalConfigOpen)
    };

    const handleConfigCloseModal = () => {
        setIsModalConfigOpen(false);
        console.log(isModalConfigOpen)
    };

    return (
        <>
            {showSkeleton ? (
                <SkeletonPainel />
            ) : (
                <div className={styles.containerGlobal}>
                    <div className={styles.containerHeader}>
                        <div className={styles.containerMotivacional}>
                            <h1 className={styles.fraseDiaria}><i>{' ' + fraseDia.frase + ' - ' + fraseDia.autor}</i></h1>
                        </div>
                        <div className={`${styles.containerInfo} ${styles.perfil}`} onClick={handlePerfilOpenModal}>
                            <FaUserAlt className={styles.icon} />
                            <h1 className={styles.iconLabel}>Perfil</h1>
                        </div>
                        {/* Modal */}
                        <PerfilUsuario isOpen={isModalPerfilOpen} onClose={handlePerfilCloseModal} />
                        <div className={`${styles.containerInfo} ${styles.config}`} onClick={handleConfigOpenModal}>
                            <FaGear className={styles.icon} />
                            <h1 className={styles.iconLabel}>Config</h1>
                        </div>
                        {/* Modal */}
                        <Config isOpen={{isModalConfigOpen}} onClose={handleConfigCloseModal} />
                        <div className={`${styles.containerInfo} ${styles.sair} `}>
                            <Link href={'/'}>
                                <RiLogoutCircleLine className={styles.icon} />
                                <h1 className={styles.iconLabel}>Sair</h1>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.containerSub}>
                        <div className={styles.menuOptionLeft}>
                            <select
                                className={styles.selector}
                                name="cars"
                                id="cars"
                                onChange={(e) => {
                                    const courseId = parseInt(e.target.value);
                                    const selected = listCourses.find((curso: any) => curso.id === courseId);

                                    // Verifica se o item já está no array
                                    if (selected && !selectedCourses.some((course) => course.id === selected.id) && !selected.estaAtivo) {
                                        setSelectedCourses((prevCourses: any) => [...prevCourses, selected]);
                                    }
                                }}
                            >
                                {listCourses.map((curso: any) => (
                                    <option key={curso.id} value={curso.id}>
                                        {curso.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.menuOptionRight}>
                            <IoAddSharp
                                className={`${styles.iconeAdd} ${activeIcon === 'add' ? `${styles.ativo}` : ''}`}
                                onClick={handleOpenModel}
                                style={{ pointerEvents: isAddButtonDisabled ? 'none' : 'auto', opacity: isAddButtonDisabled ? 0.2 : 1 }}
                            />
                            <MdOutlineEditNote
                                className={`${styles.iconeEdit} ${activeIcon === 'edit' ? `${styles.ativo}` : ''}`}
                                onClick={handleOpenModelEdit}
                                style={{ pointerEvents: isEditButtonDisabled ? 'none' : 'auto', opacity: isEditButtonDisabled ? 0.2 : 1 }}
                            />
                            <RiDeleteBin2Fill
                                className={`${styles.iconeDelete} ${activeIcon === 'delete' ? `${styles.ativo}` : ''}`}
                                onClick={handleDeleteClick}
                                style={{ pointerEvents: isDeleteButtonDisabled ? 'none' : 'auto', opacity: isDeleteButtonDisabled ? 0.2 : 1 }}
                            />
                            <div className={styles.concluido}>
                                <button
                                    className={`${styles.buttonConcluido} ${isActive ? styles.activeButton : ''}`}
                                    onClick={handleButtonClick}
                                    style={{ pointerEvents: isConcluidoButtonDisabled ? 'none' : 'auto', opacity: isConcluidoButtonDisabled ? 0.2 : 1 }}
                                >
                                    Concluídos
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerContent}>
                        <div className={styles.containerCenter} onDrop={drop} onDragOver={dragOver}>
                            <h1 className={styles.tituloFluxo}>Fluxo de Estudo</h1>
                            {selectedCourses.map(criarItemFluxo)}
                            <div className={styles.apagar}>
                                <IoTrashBin />
                            </div>
                        </div>
                        <div className={styles.containerRight}>
                            {/* Modal add*/}
                            {isModalOpen && (
                                <div className={styles.modalTarefa}>
                                    <form className={styles.formularioTarefa}>
                                        <input
                                            type="text"
                                            name="tarefa"
                                            placeholder="Nome da tarefa"
                                            value={novaTarefa.tarefa}
                                            className={styles.tarefaInput}
                                            onChange={handleInputAdd}
                                        />
                                        <input
                                            type="text"
                                            name="descricao"
                                            placeholder="Descrição"
                                            value={novaTarefa.descricao}
                                            className={styles.descricaoInput}
                                            onChange={handleInputAdd}
                                        />
                                        <div className={styles.espacoTempo}>
                                            <input
                                                type="text"
                                                name="ateDias"
                                                placeholder='Até quantos dias?'
                                                value={novaTarefa.ateDias}
                                                className={styles.dataInput}
                                                onChange={handleInputAdd}
                                            />
                                            <input
                                                type="time"
                                                name="time"
                                                value={novaTarefa.time}
                                                className={styles.horaInput}
                                                onChange={handleInputAdd}
                                            />
                                        </div>
                                        {/* <label className={styles.label}>
                                            <input
                                                className={styles.checkInput}
                                                type="checkbox"
                                                // checked={false}
                                                onChange={handleInputAdd}
                                            />
                                            Repetir?
                                        </label> */}
                                        <button className={styles.botao} type="submit" onClick={handleFormSubmit}>Adicionar</button>
                                    </form>
                                </div>
                            )}
                            {/* Modal Edit */}
                            {isEditModalOpen && (
                                <div className={styles.modalTarefa}>
                                    <form className={styles.formularioTarefa}>
                                        <input
                                            type="id"
                                            name="id"
                                            placeholder="Id da tarefa"
                                            value={tarefaEditada.id}
                                            className={styles.tarefaInput}
                                            onChange={handleEditClick}
                                            hidden // Adicionando o atributo hidden
                                        />

                                        <input
                                            type="text"
                                            name="tarefa"
                                            placeholder="Nome da tarefa"
                                            value={tarefaEditada.tarefa} // Suponho que você tenha um estado para a tarefa sendo editada
                                            className={styles.tarefaInput}
                                            onChange={handleEditClick}
                                        />
                                        <input
                                            type="text"
                                            name="descricao"
                                            placeholder="Descrição"
                                            value={tarefaEditada.descricao || 'nao preencheu'}
                                            className={styles.descricaoInput}
                                            onChange={handleEditClick}
                                        />
                                        <div className={styles.espacoTempo}>
                                            <input
                                                type="ateDias"
                                                name="ateDias"
                                                value={tarefaEditada.ateDias}
                                                className={styles.dataInput}
                                                onChange={handleEditClick}
                                            />
                                            <input
                                                type="time"
                                                name="time"
                                                value={tarefaEditada.time}
                                                className={styles.horaInput}
                                                onChange={handleEditClick}
                                            />
                                        </div>
                                        <label className={styles.label}>
                                            <input
                                                className={styles.checkInput}
                                                type="checkbox"
                                                checked={false}
                                                onChange={handleEditClick}
                                            />
                                            Repetir?
                                        </label>
                                        <button className={styles.botao} type="submit" onClick={handleFormEdit}>Editar</button>
                                    </form>
                                </div>
                            )}
                            {!isModalOpen && !isEditModalOpen && isActive == false && (
                                <div className={styles.containerTarefa}>
                                    <div className={styles.containerTarefa}>
                                        {listTarefa.map((tarefa) => tarefa.estaConcluida == false ? (
                                            <div
                                                key={tarefa.id}
                                                className={`${styles.tarefa} ${bordaAtiva == tarefa.id ? styles.selected : ''}`}
                                                onClick={() => handleDivClick(tarefa.id)}
                                            >
                                                <h1 className={styles.tituloTarefa}>{tarefa.tarefa}</h1>
                                                <h1 className={styles.descricaoTarefa}>{tarefa.descricao}</h1>
                                                <h1 className={styles.descricaoTarefaDias}>
                                                    {tarefa.ateDias ? `${tarefa.ateDias} dias até as ${tarefa.time}` : `Hoje ${tarefa.time}`}
                                                </h1>
                                                <button className={styles.concluir} onClick={() => concluirTarefa(tarefa.id)}>Concluir</button>
                                            </div>
                                        ) : null
                                        )}
                                    </div>
                                </div>
                            )}
                            {isActive == true && (
                                <div className={styles.containerTarefa}>
                                    <div className={styles.containerTarefa}>
                                        {listTarefa.map((tarefa) => {
                                            if (tarefa.estaConcluida == true) {
                                                return (
                                                    <div
                                                        key={tarefa.id}
                                                        className={`${styles.tarefa} ${bordaAtiva == tarefa.id ? styles.selected : ''}`}
                                                        onClick={() => handleDivClick(tarefa.id)}
                                                    >
                                                        <h1 className={styles.tituloTarefa}>{tarefa.tarefa}</h1>
                                                        <h1 className={styles.descricaoTarefa}>{tarefa.descricao}</h1>
                                                        <h1 className={styles.descricaoTarefaDias}>
                                                            {tarefa.ateDias ? `${tarefa.ateDias} dias até as ${tarefa.time}` : `Hoje ${tarefa.time}`}
                                                        </h1>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.menuOptionCurses}>
                        <ul className={styles.tipoCursos}>
                            <li
                                className={`${styles.meusCursos} ${styles.listaCurso} ${conteudoAtivo === 'meusCursos' ? `${styles.ativo}` : ''}`}
                                onClick={() => handleItemClick('meusCursos')}
                            >
                                Meus cursos
                            </li>
                            <li
                                className={`${styles.novoCurso} ${styles.listaCurso} ${conteudoAtivo === 'novoCurso' ? `${styles.ativo}` : ''}`}
                                onClick={() => handleItemClick('novoCurso')}
                            >
                                Novos Cursos
                            </li>
                            <li
                                className={`${styles.cursosDestacados} ${styles.listaCurso} ${conteudoAtivo === 'cursosDestacados' ? `${styles.ativo}` : ''}`}
                                onClick={() => handleItemClick('cursosDestacados')}
                            >
                                Cursos Destacados
                            </li>
                        </ul>
                    </div>
                    <div className={styles.containerCurses}>
                        {/* Renderize o conteúdo com base no estado */}
                        {conteudoAtivo === 'meusCursos' &&
                            <div className={styles.meusCursosContainer}>
                                <h1 className={styles.seusCurso}>Ainda não tem nenhum curso adquirido</h1>
                            </div>
                        }
                        {conteudoAtivo === 'novoCurso' &&
                            listCourses.map((curso) => {
                                const isCursoPago = curso.pago; // Verifique se o curso é pago
                                if (curso.id !== 1) {
                                    return (
                                        <div className={styles.curse} key={curso.id}>
                                            {isCursoPago ? (
                                                // Renderize o ícone de cadeado sobre a imagem
                                                <>
                                                    <Image src={curso.img} alt="virus" className={styles.cursoImage} />
                                                    <span className={styles.cadeadoIcon}>🔒</span>
                                                    <h1 className={styles.price}>{curso?.price} $</h1>
                                                </>
                                            ) : (
                                                <Link href={`/painel/detalhes/${curso.id}`}>
                                                    <Image src={curso.img} alt="virus" className={styles.cursoImage} />
                                                </Link>
                                            )}
                                        </div>
                                    );
                                }
                                return null; // Não renderiza o componente se o id for 1
                            })
                        }
                        {conteudoAtivo === 'cursosDestacados' &&
                            <div>Conteúdo dos Cursos Destacados</div>
                        }
                    </div>
                </div>
            )}
        </>
    );
}

