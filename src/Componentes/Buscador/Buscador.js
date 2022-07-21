import styles from './Buscador.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { DatosPanelP } from '../Panel/DatosPanelP';
import { Cards } from '../PanelIz/Cards';
import { CardsD } from '../PanelIz/CardsD';
import { useEffect, useState } from 'react';
import { Cargando } from '../Cargando/Cargando';
export function Buscador() {
    const [buscador, setBuscador] = useState('');
    const [bot, setBot] = useState(false);

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
        const searchUrl = buscador ? "https://weatherapi-com.p.rapidapi.com/current.json?lang=es&q=" + buscador : "https://weatherapi-com.p.rapidapi.com/current.json?lang=es&q=Mexico"
        fetch(searchUrl, options)
            .then(response => response.json())
            .then(data => {
                setClima(data)
                console.log(data);
                setIsLoad(false);
            }
            )
            .catch(err => console.error(err));
    }, [bot]);
    const handleSumnit = (e) => {
        e.preventDefault();
        setBot(!bot)
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
            <div className='panelIz'>
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
            {console.log(clima)}
            <DatosPanelP lugar={clima} />
        </div>
        <div className='panelIz'>
            <Cards lugar={clima} />
            <CardsD lugar={clima} />
        </div>

    </>
    )
}
