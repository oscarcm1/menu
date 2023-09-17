import React, { useState } from 'react'
import "./menu-side.css"
import Logo from "../assets/Logo.png"

function MenuSide() {

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  function activeMenu() {
    handleClick();
    if (click) {
      document.querySelector('.menu-glass').classList.add('active');
    } else {
      document.querySelector('.menu-glass').classList.remove('active');
    }
  }

  return (
    <div className='bg-menu'>

      <div className='menu-glass'>
        <nav>
          <ul className='menu'>
            <li className='btn-menu'><button onClick={activeMenu}><i className="bi bi-arrows-angle-expand"></i></button></li>
            <li className='bg-logo'> <img src={Logo} alt='Oscar Digital Design'/><h1>Digital Design</h1></li>
            <li className='menu-item'><span>Home</span>  <i className="bi bi-house-fill"></i></li>
            <li className='menu-item'><span>About Me</span><i className="bi bi-person-fill"></i></li>
            <li className='menu-item'><span>Services</span><i className="bi bi-tools"></i></li>
            <li className='menu-item'><span>Pricing</span><i className="bi bi-currency-exchange"></i></li>
            <li className='menu-item'><span>Contact</span><i className="bi bi-chat-fill"></i></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default MenuSide