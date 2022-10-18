import './App.css';
import Botones from './componets/Boton';
import Contador from './componets/Contador';
import { useState } from 'react'


function App() {

  const [numClicks, setNumClicks] = useState(0);


  //Declaracion de funciones
  const contaremos = () =>{
    setNumClicks(numClicks + 1);
  }

  const reiniciar = () =>{
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='containerBase'>
        <h1 className='containerBase_title'>Contador en ReactJS</h1>
        <Contador
        numClicks={numClicks}/>
        <Botones
         texto = "Contar"
         esBotonDeClick = {true}
         ejecutar = {contaremos}/>

        <Botones
         texto = "Reiniciar"
         esBotonDeClick = {true}
         ejecutar = {reiniciar}/>
      </div>  
    </div>
  );
}

export default App;
