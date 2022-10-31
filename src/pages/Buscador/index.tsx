import { SetStateAction } from 'react';
import style from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface props {
    busca: string,
    setBusca: React.Dispatch<SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: props) {
    return <div className={style.buscador}>
            <input
                value={busca}
                onChange={evento => setBusca(evento.target.value)} />
            <CgSearch size={20} color={'#4C4D5E'} />
        </div>
    
}