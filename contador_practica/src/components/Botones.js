import React from 'react'
import '../styles/Botones.css'

const Botones = ({ texto, tipoDeBoton, manejarClick }) => {
  return (
    <button className = { tipoDeBoton ? 'botonClick' : 'botonReiniciar'}
    onClick = {manejarClick}>
       { texto }
    </button>
  )
}

export default Botones