import React from 'react'
import foodImage from '../img/food-icon.png'
import addToCart from '../img/add-to-cart.png'
import '../stylesheets/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="menu-icon">
            <img src={foodImage} alt="Icono de menu" />
            <h2>Menu Deivy's Empanada</h2>
        </div>
        <img src={addToCart} alt="Shopping cart ico" />
    </div>
  )
}

export default Navbar