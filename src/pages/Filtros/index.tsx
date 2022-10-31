import filtros from './Filtros.json';
import styles from './Filtros.module.scss';

export default function Filtros() {

    interface IOpcao {
        id: number,
        label:string
    }

    function selecionarOpcao(opcao : IOpcao){

    }

    return <div className={styles.filtros}>
        {filtros.map((opcao) => (

            <button className={styles.filtros__filtro} key={opcao.id} onClick={evento => selecionarOpcao(opcao)}>{opcao.label}</button>
        ))}
    </div>
}