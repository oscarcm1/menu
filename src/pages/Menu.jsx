import React, { useState } from 'react'
import "./menu.css"
import Logo from "../assets/logo.png"


function Menu() {


    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    const [icon, setIcon] = useState("bi bi-caret-left-fill");

    function activeMenu() {
        handleClick();
        if (click) {

            document.querySelector('.card-menu').classList.add('active');
            document.querySelector('.logo').classList.add('active');
            document.querySelector('.list-menu').classList.add('active');
            document.querySelector('.card-message').classList.add('active');


            setIcon("bi bi-caret-right-fill");
        } else {
            document.querySelector('.card-menu ').classList.remove('active');
            document.querySelector('.logo').classList.remove('active');
            document.querySelector('.list-menu').classList.remove('active');
            document.querySelector('.card-message').classList.remove('active');
            setIcon("bi bi-caret-left-fill");
        }
    }



    return (
        <div className='menu'>

            <div className='card-menu'>

                <div className='open'>
                    <button onClick={activeMenu}><i className={icon}></i></button>
                </div>

                <div className='logo'>
                    <img src={Logo} />
                    <h1>Oscar  Chávez</h1>
                </div>

                <div className='list-menu'>
                    <ul className='menu-item'>
                        <li><button className='btn'><span>Home       </span> <i className="bi bi-house-fill"></i>    </button></li>
                        <li><button className='btn'><span>Users      </span> <i className="bi bi-people-fill"></i>  </button></li>
                        <li><button className='btn'><span>Client     </span> <i className="bi bi-person-lines-fill"></i>  </button></li>
                        <li><button className='btn'><span>Dashboard  </span> <i className="bi bi-speedometer"></i>   </button></li>
                        <li><button className='btn'><span>Options    </span> <i className="bi bi-gear-fill"></i>   </button></li>
                        <li><button className='btn'><span>Exit       </span> <i className="bi bi-x-circle-fill"></i>  </button></li>
                    </ul>
                </div>



                <div className='box-message'>
                    <div className='card-message'>

                        <div className='title'>
                            <h2>Messages</h2>
                            <i className="bi bi-chat-left-dots-fill"></i>
                        </div>


                        <div className='message'>
                            <div className='picture'></div>
                            <p>Nikki Maraston</p>
                            <span>2</span>
                        </div>

                        <div className='message'>
                            <div className='picture'></div>
                            <p>Laura</p>
                            <span>1</span>
                        </div>

                        <div className='message'>
                            <div className='picture'></div>
                            <p>Oscar</p>
                            <span>10</span>
                        </div>

                        <div className='message'>
                            <div className='picture'></div>
                            <p>Alin</p>
                            <span>3</span>
                        </div>



                    </div>

                </div>

            </div>




        </div>
    )
}

export default Menu