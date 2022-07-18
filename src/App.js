import { useEffect, useState } from 'react';
import './App.css';
import { Buscador } from './Componentes/Buscador/Buscador';
import { DatosPanelP } from './Componentes/Panel/DatosPanelP';
import { Cards } from './Componentes/PanelIz/Cards';
import { CardsD } from './Componentes/PanelIz/CardsD';

function App() {
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

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Mexico&lang=es', options)
      .then(response => response.json())
      .then(data => {
        setClima(data)
        setIsLoad(false);
      }
      )
      .catch(err => console.error(err));
  }, []);

  if (isLoad) {
    return <h1>cargando</h1>
  }

  return (<>
    <div className="App">
      <div className='panel'>
        <Buscador />
        {console.log(clima)}
        <DatosPanelP className="bd" lugar={clima} />
      </div>
      <div className='panelIz'>
        <Cards lugar={clima} />
        <CardsD lugar={clima} />
      </div>
    </div>
  </>
  );
}

export default App;
