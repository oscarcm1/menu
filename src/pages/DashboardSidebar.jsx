import React, { useState } from 'react'
import "./dashboard-sidebar.css"
import Logo from "../assets/logo.png"

function DashboardSidebar() {

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);


  function activeMenu() {
    handleClick();
    if (click) {
      document.querySelector('.menu-dashboard').classList.add('active');
    } else {
      document.querySelector('.menu-dashboard').classList.remove('active');
    }
  }

  return (
    <div className='bg-menu'>

      <div className='menu-dashboard'>
        <nav>
          <ul className='menu'>
            <li className='btn-menu'><button onClick={activeMenu}><i className="bi bi-arrows-angle-expand"></i></button></li>
            <li className='bg-logo'> <img src={Logo} alt='Oscar Digital Design' /><h1>Digital Design</h1></li>
            <li className='menu-item search'><span><input placeholder='Search..' /> </span><i className="bi bi-search"></i></li>
            <li className='menu-item'><span>Dashboard</span>  <i className="bi bi-house-fill"></i></li>
            <li className='menu-item'><span>User</span><i className="bi bi-person-fill"></i></li>
            <li className='menu-item'><span>Messages</span><i className="bi bi-chat-fill"></i></li>
            <li className='menu-item'><span>Analytics</span><i className="bi bi-clipboard2-data-fill"></i></li>
            <li className='menu-item'><span>Order</span><i className="bi bi-currency-exchange"></i></li>
            <li className='menu-item'><span>Setting</span><i className="bi bi-gear-fill"></i></li>
            <li className='menu-item logout'><span>Exit</span><i className="bi bi-box-arrow-left"></i></li>

          </ul>
        </nav>
      </div>

    </div>
  )
}

export default DashboardSidebar