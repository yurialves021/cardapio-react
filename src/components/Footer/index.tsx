import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo2.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}> <Logo /></footer>
  );

}