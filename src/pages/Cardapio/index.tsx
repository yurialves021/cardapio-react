import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo2.svg';
import Buscador from 'pages/Buscador';
import Filtros from 'pages/Filtros';
import { useState } from 'react';
import Ordenador from 'pages/Ordenador';
import Itens from 'pages/Itens';


export default function Cardapio() {

    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<Number | null>(null);
    const [ordenador, setOrdenador] = useState('');

    return (
        <main>
            <nav className={styles.menu}><Logo /></nav>

            <header className={styles.header}>
                <div className={styles.header__text}>
                    Cardápio de Massas
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador
                    busca={busca}
                    setBusca={setBusca}
                />
                <div className={styles.cardapio__filtros}>
                    <Filtros
                        filtro={filtro}
                        setFiltro={setFiltro}
                    />
                    <Ordenador
                        ordenador={ordenador}
                        setOrdenador={setOrdenador}
                    />
                </div>
                <Itens />

            </section>

        </main>
    )
}