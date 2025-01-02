import Cabecalho from '@/component/paginaInicial/Cabecalho';
import style from '../../../styles/linguagens.module.css'
import CorpoLinguagens from '@/component/programacao/linguagens/CorpoLinguagens';

export default function Programminglanguages() {
    return (
        <div className={style.containerGlobal}>
            <Cabecalho titulo="Linguagens" />
            <CorpoLinguagens />
        </div>
    )
}