"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fundo from '../../../public/fundo.png';
import styles from '../../styles/registrar.module.css';
import { useRouter } from 'next/navigation';

export default function Registrar() {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [warning, setWarning] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaNovamente, setSenhaNovamente] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [listEmails, setListEmails] = useState<any[]>([]);
    const router = useRouter(); // Adicione o useRouter
    const dataAtual = new Date();

    const handleInputChange = (e: any) => {
        switch (e.target.name) {
            case 'nome':
                setNome(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'senha':
                setSenha(e.target.value);
                break;
            case 'senhaNovamente':
                setSenhaNovamente(e.target.value);
                break;
            case 'dataNascimento':
                setDataNascimento(e.target.value);
                break;
            case 'sexo':
                setSexo(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleCheckboxChange = () => {
        setAcceptedTerms(!acceptedTerms);
        console.log(acceptedTerms)
    };

    useEffect(() => {
        // Função que será executada a cada 3 minutos
        async function consultarEmail() {
            try {
                const response = await fetch('http://localhost:3000/api/usuario');
                const data = await response.json();
                const userArray = data.users.map((element: any) => element.email); // Mapeando apenas os emails
                setListEmails(userArray);
                console.log('Emails dos usuários:', listEmails);
            } catch (error) {
                console.error('Erro ao obter os emails dos usuários:', error);
            }
            // Por exemplo, fazer uma requisição à sua API ou algo similar
            console.log('Consultando emails...');
        }

        // Disparar a função inicialmente
        consultarEmail();

        // Configurar o intervalo de 3 minutos (180000 ms)
        const intervalId = setInterval(consultarEmail, 180000);

        // Lembre-se de limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []); // Certifique-se de passar as dependências corretas aqui, se necessário

    console.log(dataNascimento)
    const handleSubmit = async () => {
        console.log(nome, email, senha, senhaNovamente, dataNascimento, sexo); // Verifique os valores dos campos do formulário
        // await consultarEmail()
        // Consulta os emails existentes
        // console.log(listEmails)
        if (dataNascimento > '2012-09-29') {
            setWarning('Data precisa ser acima de 8 anos');
            setTimeout(() => {
                setWarning('');
            }, 5000);
        }
        else if (listEmails.includes(email)) {
            setWarning('E-mail já cadastrado');
            setTimeout(() => {
                setWarning('');
            }, 5000);
        } else if (!acceptedTerms) {
            setWarning('Aceite os termos e condições');
            setTimeout(() => {
                setWarning('');
            }, 5000);
        } else if (!nome || !email || !senha || !senhaNovamente || !dataNascimento || !sexo) {
            setWarning('Preencha todos os campos');
            setTimeout(() => {
                setWarning('');
            }, 5000);
        } else if (senha !== senhaNovamente) {
            setWarning('As senhas não coincidem');
            setTimeout(() => {
                setWarning('');
            }, 5000);
        } else {
            try {
                const formData = new FormData();
                formData.append('nome', nome);
                formData.append('email', email);
                formData.append('senha', senha);
                formData.append('dataNascimento', dataNascimento);
                formData.append('sexo', sexo);

                const response = await fetch('/api/usuario', {
                    method: 'POST',
                    body: formData,
                });
                router.push('/registrar/perfil'); // Redireciona para a página /painel
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Erro ao inserir usuário no banco de dados', error);
            }
        }
    };

    return (
        <div className={styles.containerFundo}>
            <Image className={styles.fundoImage} src={fundo} alt="Background" quality={100} />
            <div className={styles.containerCadastrar}>
                <div className={styles.itemColumn}>
                    <h1 className={styles.nome}>Nome:</h1>
                    <input className={styles.nomeInput} name="nome" onChange={handleInputChange} />
                    <h1 className={styles.email}>E-mail:</h1>
                    <input className={styles.emailInput} name="email" onChange={handleInputChange} />
                    <h1 className={styles.senha}>Senha:</h1>
                    <input className={styles.senhaInput} name="senha" onChange={handleInputChange} />
                    <h1 className={styles.senhaNovamente}>Senha Novamente:</h1>
                    <input className={styles.senhaNovamenteInput} name="senhaNovamente" onChange={handleInputChange} />
                    <h1 className={styles.dataNascimento}>Data de Nascimento:</h1>
                    <input type="date" className={styles.dataNascimentoInput} name="dataNascimento" onChange={handleInputChange} />
                    <h1 className={styles.sexo}>Sexo:</h1>
                    <select className={styles.sexoSelect} name="sexo" onChange={handleInputChange}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <div className={styles.termos}>
                        <input type="checkbox" id="termos" className={styles.termosCheck} name="termos" value="aceito" onChange={handleCheckboxChange} />
                        <label className={styles.termosLabel}>Aceito os Termos e Condições</label>
                    </div>
                    <button className={styles.button} onClick={handleSubmit}>Confirmar</button>
                    {warning && <div>{warning}</div>}
                </div>
            </div>
        </div>
    );
};
