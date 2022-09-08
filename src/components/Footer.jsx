import React from 'react'
import mooncoLogo from '../img/moonCo.png'
import '../stylesheets/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <p>Estamos ubicados en</p>
        <span>Main street 525 Republica Dominicana, San Cristobal</span>
        <div className='final'>
            <img src={mooncoLogo} alt="" />
        </div>
    </div>
  )
}

export default Footer