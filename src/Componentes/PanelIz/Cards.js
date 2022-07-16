import styles from './Cards.module.css';
import nube from '../../assets/descarga.png';
export function Cards() {
    return (
        <div className={styles.Cards}>
            <div className={styles.Card} >
                <p>Dia 5 jul</p>
                <img src={nube} height={30} alt="knasij" />
                <p>45°C</p>
            </div>
            <div className={styles.Card} >
                <p>Dia 6 jul</p>
                <img src={nube} height={30} alt="knasij" />
                <p>45°C</p>
            </div>
            <div className={styles.Card} >
                <p>Dia 7 jul</p>
                <img src={nube} height={30} alt="knasij" />
                <p>45°C</p>
            </div>
            <div className={styles.Card} >
                <p>Dia 8 jul</p>
                <img src={nube} height={30} alt="knasij" />
                <p>45°C</p>
            </div>
            <div className={styles.Card} >
                <p>Dia 8 jul</p>
                <img src={nube} height={30} alt="knasij" />
                <p>45°C</p>
            </div>
        </div>
    )
}
