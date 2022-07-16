import styles from './Buscador.module.css';
import { BiSearchAlt } from 'react-icons/bi';
export function Buscador() {
    return (
        <div className={styles.Flex}>
            <input className={styles.Buscador} type='text' ></input>
            <button className={styles.Boton}><BiSearchAlt size={15} /></button>
        </div>
    )
}
