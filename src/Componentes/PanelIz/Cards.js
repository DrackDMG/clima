import styles from './Cards.module.css';
export function Cards({ lugar }) {
    return (

        <div className={styles.Card} >
            <p>Día {lugar.date}</p>
            <img src={lugar.day.condition.icon} height={50} alt="knasij" />
            <div className={styles.Temp}><p>{lugar.day.mintemp_c}°C </p>
                -
                <p> {lugar.day.maxtemp_c}°C</p></div>
        </div>
    )
}
