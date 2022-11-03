import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Cardápio de Massas
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}