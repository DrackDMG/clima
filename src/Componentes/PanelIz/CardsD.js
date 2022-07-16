import styles from './CardsD.module.css';
export function CardsD() {
    return (<>
        <h1 className={styles.desc}> cosas</h1>
        <div className={styles.Cards}>
            <div className={styles.Card} ></div>
            <div className={styles.Card} ></div>
            <div className={styles.Card} ></div>
            <div className={styles.Card} ></div>
        </div>
    </>
    );
}
