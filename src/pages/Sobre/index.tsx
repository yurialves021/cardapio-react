import styles from './Sobre.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import sobreNosImg from 'assets/sobre/casa.png';
import imagem1 from 'assets/sobre/massa1.png';
import imagem2 from 'assets/sobre/massa2.png';

export default function Sobre() {

  const imagens = [imagem1, imagem2];

  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre Nós</h3>
      <div className={styles.sobreNos} >
        <img src={sobreNosImg} alt='sobreNos' />

        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((item, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={item} alt='pratos' />
          </div>
        ))}
      </div>

    </section>
  );
}