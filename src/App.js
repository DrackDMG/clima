import './App.css';
import { Buscador } from './Componentes/Buscador/Buscador';
import { DatosPanelP } from './Componentes/Panel/DatosPanelP';
import { Cards } from './Componentes/PanelIz/Cards';
import { CardsD } from './Componentes/PanelIz/CardsD';

function App() {
  return (<>
    <div className="App">
      <div className='panel'>
        <Buscador />
        <DatosPanelP className="bd" />
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
