import styles from './CardsD.module.css';

export function CardsD() {
    return (<>
        <h1 className={styles.desc}> Today's Highlights</h1>
        <div className={styles.Cards}>
            <div className={styles.Card} >
                <p>Velocidan del viento</p>
                <h1>7mph</h1>
                <p>nose que dice aqui</p>
            </div>
            <div className={styles.Card} >
                <p>Humedad</p>
                <h1>84%</h1>
                <progress value="70" max="100">70 %</progress>
            </div>
            <div className={styles.Card2} >
                <p>Visibilidad</p>
                <h1>6,4 millas</h1>
            </div>
            <div className={styles.Card2} >
                <p>nose que dice</p>
                <h1>998mb</h1>
            </div>
        </div>
    </>
    );
}
