import styles from './Inicio.module.scss';
import cardapio from 'data/cardapio.json';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from 'assets/img/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';


export default function Inicio() {
  
  let listaPreferidos = [...cardapio];
  listaPreferidos = listaPreferidos.sort(() => 0.5 - Math.random()).splice(0, 3);

  const navigate = useNavigate();

  function redirecionarPrato(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }

  return (
    <div>
      <h3 className={stylesTema.titulo}>Destaques do Dia</h3>
      <div className={styles.recomendados}>
        {listaPreferidos.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarPrato(item)}
            >Ver Mais</button>
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

    </div >
  );
}