import styles from './Buscador.module.css';
export function Buscador() {
    return (
        <div>
            <input className={styles.Buscador} type='text' ></input>
            <button className={styles.Boton}>Buscar</button>
        </div>
    )
}
