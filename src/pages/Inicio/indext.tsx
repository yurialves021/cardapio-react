import styles from './Inicio.module.scss';
import cardapio from 'data/cardapio.json';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from 'assets/img/nossa_casa.png';

let listaPreferidos = [...cardapio];
listaPreferidos = listaPreferidos.sort(() => 0.5 - Math.random()).splice(0, 3);

export default function Inicio() {
  return (
    <div>
      <h3 className={stylesTema.titulo}>Destaques do Dia</h3>
      <div className={styles.recomendados}>
        {listaPreferidos.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>Ver Mais</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='NossaCasa' />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /><br /> Vila Mariana - SP
        </div>
      </div>
      
    </div>
  );
}