import React from 'react'
import "../styles/Contador.css"

const Contador = ({numClicks}) => {
  return (
    <div className='containerContador'>
        <p className='containerContador_valor'>
          {numClicks}
        </p>
    </div>
  )
}

export default Contador