import styles from './Cards.module.css';
export function Cards({ lugar }) {
    const fecha = new Date(lugar.date);
    const dia = new Date(fecha.getTime() + (24 * 60 * 60 * 1000));
    return (
        <div className={styles.Card} >
            <p className={styles.grados}>Día {dia.toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}</p>
            <img src={lugar.day.condition.icon} height={50} alt="knasij" />
            <div className={styles.Temp}><p className={styles.grados}> {lugar.day.mintemp_c}°C</p>-<p className={styles.grados}> {lugar.day.maxtemp_c}°C</p></div>
        </div>
    )
}
