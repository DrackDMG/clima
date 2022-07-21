import styles from './Buscador.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { DatosPanelP } from '../Panel/DatosPanelP';
import { Cards } from '../PanelIz/Cards';
import { CardsD } from '../PanelIz/CardsD';
import { useEffect, useState } from 'react';
import { Cargando } from '../Cargando/Cargando';
export function Buscador() {
    const [buscador, setBuscador] = useState('');
    const [searchUrl, setSearchUrl] = useState("https://weatherapi-com.p.rapidapi.com/forecast.json?lang=es&q=Mexico&days=7");

    const [clima, setClima] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setIsLoad(true)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'edc44c572fmsh792cd706a56db84p125ab8jsnd197b3e5ab19',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        fetch(searchUrl, options)
            .then(response => response.json())
            .then(data => {
                setClima(data)
                setIsLoad(false);
            }
            )
            .catch(err => console.error(err));
    }, [searchUrl]);
    const handleSumnit = (e) => {
        e.preventDefault();
        setSearchUrl(buscador ? "https://weatherapi-com.p.rapidapi.com/forecast.json?lang=es&days=7&q=" + buscador : "https://weatherapi-com.p.rapidapi.com/forecast.json?lang=es&q=Mexico&days=7")
    }

    if (isLoad) {
        return <Cargando />
    }
    if (!isLoad && clima.error) {
        return <>
            <div className='panel'>
                <form className={styles.contenedor} onSubmit={handleSumnit}>
                    <div className={styles.Flex}>
                        <input placeholder='Ciudad...' className={styles.Buscador} type='text'
                            value={buscador} onChange={(e) => setBuscador(e.target.value)} />
                        <button type='submit' className={styles.Boton}><BiSearchAlt size={15} /></button>
                    </div>
                    <h1 className={styles.noRes}>sin resultados</h1>
                </form>
            </div>
        </>
    }

    return (<>
        <div className='panel'>
            <form className={styles.contenedor} onSubmit={handleSumnit}>
                <div className={styles.Flex}>
                    <input placeholder='Ciudad...' className={styles.Buscador} type='text'
                        value={buscador} onChange={(e) => setBuscador(e.target.value)} />
                    <button type='submit' className={styles.Boton}><BiSearchAlt size={15} /></button>
                </div>
            </form>
            <DatosPanelP lugar={clima} />
        </div>
        <div className='panelIz'>
            <div className={styles.Cards}>
                {clima.forecast.forecastday.map((clim) => (
                    <Cards key={clim.date_epoch} lugar={clim} />
                ))}
            </div>
            <CardsD lugar={clima} />
        </div>

    </>
    )
}
