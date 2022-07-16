import nube from '../../assets/descarga.png';
import styles from './DatosPanelP.module.css'
export function DatosPanelP() {
    return (
        <div className={styles.datos}>
            <img src={nube} alt="knasij" />
            <div><h1 className={styles.grados}>15^C</h1></div>
            <h3>snower</h3>
            <h4>today</h4>
            <h4>location</h4>
        </div>
    )
}
