
import styles from './DatosPanelP.module.css'
export function DatosPanelP({ lugar }) {
    return (
        <div className={styles.datos}>
            <div className={styles.gradosD}>
                <h1 className={styles.grados}>{lugar.current.temp_c}</h1>
                <h1 className={styles.gradosC}>°C</h1>
            </div>
            <img src={lugar.current.condition.icon} height={80} alt="knasij" />
            <h3 className={styles.estado}>{lugar.current.condition.text}</h3>
            <h4 className={styles.h4}>Día {lugar.location.localtime}</h4>
            <h4 className={styles.h4}>{lugar.location.name}</h4>
        </div>
    )
}
