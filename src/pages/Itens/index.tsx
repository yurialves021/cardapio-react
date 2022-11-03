import styles from './Itens.module.scss';
import itens from 'data/cardapio.json';
import Item from './Item';
import { useState, useEffect } from 'react';

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props) {

  const { busca, filtro, ordenador } = props;
  const [lista, setLista] = useState(itens);

  function testarBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testarFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof itens) {
    switch (ordenador) {
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(
    () => {
      const novaLista = itens.filter(item => testarBusca(item.title) && testarFiltro(item.category.id));
      setLista(ordenar(novaLista));
    }
    , [busca, filtro, ordenador]
  );

  return <div className={styles.itens}>
    {lista.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </div>;
}