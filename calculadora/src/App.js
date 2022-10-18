import './App.css';
import Logo from './images/testimonio-img5.jpg'
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <h1 className='tille_calculator'>Calculadora en React JS</h1>
      <div className='container_logo'>
         <img src={Logo}
              alt= "logo_proyecto"
              width= "100%" height="100%"/>
      </div>

      <div className='container_calculator'>
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
