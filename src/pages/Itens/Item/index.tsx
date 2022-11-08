import styles from './Item.module.scss';
import itens from 'data/cardapio.json';
import classNames from 'classnames';
import { Prato } from 'types/Prato';
import TagPratos from 'components/TagPratos';


export default function Item(props: Prato) {

  const { title, description, photo,  id } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagPratos {...props} />
      </div>
    </div>
  );
}