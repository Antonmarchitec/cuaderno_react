import React from 'react'
import '../styles/Boton.css'


const Botones = ({texto, esBotonDeClick, ejecutar}) => {
  return (
    
      <button className={esBotonDeClick ? 'boton_click' : 'boton_reiniciar'}
      onClick = {ejecutar}>
        {texto}
      </button>

  )
}

export default Botones