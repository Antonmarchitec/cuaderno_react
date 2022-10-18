import React from 'react'
import nuevaImg from '../images/image.jpg'



 export const Header = () => {
  return (
    <nav className='contHeader'>
        <figure className='contHeader_logo'>
           <img src={nuevaImg} className='logo' />
        </figure>

        <ul className='contHeader_ul'>

        </ul>

        <div className='contHeader_btn'>

        </div>
    </nav>
  )
}

//export default Header