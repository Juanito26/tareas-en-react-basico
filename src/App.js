import logo from './logo.svg';
import './App.css';
import ComponenteB from './Componentes/ComponenteB';
import { Contacto } from './Componentes/ComponenteA.class';

function App() {
  const defaultTask = new Contacto('juan','xxsx','AAS',true );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>

          <ComponenteB us={defaultTask}/>
        </div>
      </header>
    </div>
  );
}

export default App;
