import styles from './Inicio.module.scss';
import cardapio from 'data/cardapio.json';

let listaPreferidos = [...cardapio];
listaPreferidos = listaPreferidos.sort(() => 0.5 - Math.random()).splice(0, 3);

export default function Inicio() {
  return (
    <div>
      <h3 className={styles.titulo}>Destaques do Dia</h3>
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
    </div>
  );
}