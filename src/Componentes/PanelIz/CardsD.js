import styles from './CardsD.module.css';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { MdVisibility, MdOutlineCompress } from 'react-icons/md';

export function CardsD({ lugar }) {
    return (<>
        <h1 className={styles.desc}> Datos de hoy</h1>
        <div className={styles.Cards}>
            <div className={styles.Card} >
                <div className={styles.Div}>
                    <p className={styles.p}>Velocidad del viento</p>
                    <WiStrongWind size={25} />
                </div>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.gust_kph}</h1>
                    <h1 className={styles.kphf}>Kph</h1>
                </div>
                <p className={styles.p}  >{lugar.current.wind_dir}</p>
            </div>
            <div className={styles.Card} >
                <div className={styles.Div}>
                    <p className={styles.p}> Humedad</p>
                    <WiHumidity size={23} />
                </div>

                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.humidity}</h1>
                    <h1 className={styles.kphf}>%</h1>
                </div>
                <progress value={lugar.current.humidity} max="100">{lugar.current.humidity}</progress>
            </div>
            <div className={styles.Card + " " + styles.Card2} >
                <div className={styles.Div}>
                    <p className={styles.p}>Visibilidad</p>
                    <MdVisibility />
                </div>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.vis_km}</h1>
                    <h1 className={styles.kphf}>Km</h1>
                </div>
            </div>
            <div className={styles.Card + " " + styles.Card2} >
                <div className={styles.Div}>
                    <p className={styles.p}>Presión del aire</p>
                    <MdOutlineCompress />
                </div>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.pressure_in}</h1>
                    <h1 className={styles.kphf}>in</h1>
                </div>
            </div>
        </div>
    </>
    );
}
