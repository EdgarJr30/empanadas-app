import React from 'react'
import mooncoLogo from '../img/moonCo.png'
import '../stylesheets/Header.css'

function Header() {
  return (
    <div className='header'>
        <h1>Fulano Empanada</h1>
        <img src={mooncoLogo} alt="MoonCode Logo" />
    </div>
  )
}

export default Header