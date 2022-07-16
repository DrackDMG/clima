import nube from '../../assets/descarga.png';
import styles from './DatosPanelP.module.css'
export function DatosPanelP() {
    return (
        <div className={styles.datos}>
            <img src={nube} alt="knasij" />
            <div className={styles.gradosD}>
                <h1 className={styles.grados}>15</h1>
                <h1 className={styles.gradosC}>°C</h1>
            </div>
            <h3 className={styles.estado}>shower</h3>
            <h4 className={styles.h4}>Today Viernes 5 de junio</h4>
            <h4 className={styles.h4}>Mexico</h4>
        </div>
    )
}
