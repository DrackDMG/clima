import { MdLocationOn } from 'react-icons/md';
import styles from './DatosPanelP.module.css'

export function DatosPanelP({ lugar }) {
    const fecha = new Date(lugar.forecast.forecastday[1].date);
    return (
        <div className={styles.datos}>
            <div className={styles.gradosD}>
                <h1 className={styles.grados}>{lugar.current.temp_c}</h1>
                <h1 className={styles.gradosC}>°C</h1>
            </div>
            <img src={lugar.current.condition.icon} height={80} alt="knasij" />
            <h3 className={styles.estado}>{lugar.current.condition.text}</h3>
            <h4 className={styles.h4}>Día {fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</h4>
            <div className={styles.gradosD}>
                <MdLocationOn size={17} />
                <h4 className={styles.h4}> {lugar.location.name}</h4>
            </div>
        </div>
    );
}
