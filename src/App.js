import './App.css';
import nube from './assets/descarga.jpg';
import { Buscador } from './Componentes/Buscador/Buscador';
import { Footer } from './Componentes/Footer/Footer';
import { DatosPanelP } from './Componentes/Panel/DatosPanelP';
import { Cards } from './Componentes/PanelIz/Cards';
import { CardsD } from './Componentes/PanelIz/CardsD';

function App() {
  return (<>
    <div className="App">
      <div className='panel'>
        <Buscador />
        <DatosPanelP />
      </div>
      <div className='panelIz'>
        <Cards />
        <CardsD />
      </div>
    </div>
  </>
  );
}

export default App;
