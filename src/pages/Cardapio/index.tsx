import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo2.svg';


export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}><Logo /></nav>

            <header className={styles.header}>
                <div className={styles.header__text}>
                    Cardápio de Massas
                </div>
            </header>
        </main>
    )
}