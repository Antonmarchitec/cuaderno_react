import React from 'react'
import '../styles/Footer.css'


export const Footer = ({ texto }) => {
  return (
    <div className='container_footer'>
        <h1 className='footer_text'>{ texto }</h1>
    </div>
  )
}

//export default Footer