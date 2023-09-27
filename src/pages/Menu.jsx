import  { React, useState } from "react";
import { LinkedinIcon, GithubIcon,  MenuIcon , ThemeIcon , Logo} from "../components/Icons";
import "./menu.css"

function Menu() {
  const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState("active");
  

  function changeIcon() {
    if (theme === "dark") {
      setTheme("light");
      document.querySelector('#root').classList.add('dark');
    } 
    
    else {
      setTheme("dark");
      document.querySelector('#root').classList.remove('dark'); 
    }
  }

  function menuActive() {


    if (icon === "active") {
      setIcon("close");
      document.querySelector('.menu').classList.add('active');
      
    } 
    else { 
      setIcon("active");
      document.querySelector('.menu').classList.remove('active');
    }
   

  }

  function scrollToTop(){
    setIcon("active");
    document.querySelector('.menu').classList.remove('active');
    window.scrollTo(0, 0);
  }

  return (
    <div className="menu">

      <div className="menu-section logo">
        <a href="https://oscardigital.website/"><Logo /> </a>
      </div>

      <div className="menu-nav">
        <nav>
          <div className="menu-icon">
               <button    onClick={menuActive}><MenuIcon    menu={icon}/></button>
          </div>
          <ul className="nav-menu">
            <li className="nav-item" onClick={ scrollToTop}>
              <a href="#" className="nav-links" >Home</a>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <a href="sobre" className="nav-links" >Sobre mí </a>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <a href="resumen" className="nav-links" > Resumen </a>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <a href="portafolio"  className="nav-links" > Portafolio </a>
            </li>
            <li className="nav-item contacto" onClick={scrollToTop}>
              <a href="contacto" className="nav-links"> Contacto </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-nav social">

        <div className="icon">
          <a href="https://github.com/oscarcm1" target="_blank"> <LinkedinIcon /></a>
        </div>
        <div className="icon">
          <a href="https://github.com/oscarcm1" target="_blank"><GithubIcon/></a>
        </div>
        <div className="icon">
          <button  onClick={changeIcon} className="theme"> <ThemeIcon theme= {theme}/> </button>
        </div>

      </div>

    </div>
  );
}


export default Menu;
