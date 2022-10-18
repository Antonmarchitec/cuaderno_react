import './App.css';
import {useState} from 'react'    //HOOKS



//COMPONENTS
import Contador from './components/Contador'
import Botones from './components/Botones'
import {Footer} from './components/Footer'




function App() {
  const[numClicks, setNumClicks] = useState(0);

  const contadorActivo = ()=>{
    setNumClicks(numClicks + 1);
  }

  const reiniciar = ()=>{
    setNumClicks(0);
  }



  return (
    <div className="App">
      <div className="container">
        <h1 className="container_title">Contador</h1>
          <Contador
          numClicks = {numClicks}/>
        <div className='containerBotones'>
          <Botones
          texto = "Contador"
          tipoDeBoton = {true}
          manejarClick = {contadorActivo}/>
          <Botones
          texto="Reiniciar"
          tipoDeBoton = {false}
          manejarClick ={reiniciar}/>
        </div>
        <Footer
          texto = "Pie de pagina footer"/>
      </div>
    </div>
  );
}

export default App;
