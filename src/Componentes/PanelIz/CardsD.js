import styles from './CardsD.module.css';

export function CardsD({ lugar }) {
    return (<>
        <h1 className={styles.desc}> Datos de hoy</h1>
        <div className={styles.Cards}>
            <div className={styles.Card} >
                <p className={styles.p}>Velocidad del viento</p>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.gust_kph}</h1>
                    <h1 className={styles.kphf}>Kph</h1>
                </div>
                <p className={styles.p}  >{lugar.current.wind_dir}</p>
            </div>
            <div className={styles.Card} >
                <p className={styles.p}>Humedad</p>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.humidity}</h1>
                    <h1 className={styles.kphf}>%</h1>
                </div>
                <progress value={lugar.current.humidity} max="100">{lugar.current.humidity}</progress>
            </div>
            <div className={styles.Card2} >
                <p className={styles.p}>Visibilidad</p>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.vis_km}</h1>
                    <h1 className={styles.kphf}>Km</h1>
                </div>
            </div>
            <div className={styles.Card2} >
                <p className={styles.p}>Presión del aire</p>
                <div className={styles.Div}>
                    <h1 className={styles.kph}>{lugar.current.pressure_in}</h1>
                    <h1 className={styles.kphf}>in</h1>
                </div>
            </div>
        </div>
    </>
    );
}
