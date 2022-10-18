import React from 'react'
import "../styles/Boton.css"


const Boton = ( props ) => {
  return (
    <div className='container_boton'>
      {props.children}
    </div>
  )
}

export default Boton


//quedamos en 4:33:41