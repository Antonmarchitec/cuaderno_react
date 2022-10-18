import React from 'react'
import '../styles/Contador.css'

const Contador = ({ numClicks }) => {
  return (
    <div className='containerContador'>
        { numClicks }
    </div>
  )
}

export default Contador