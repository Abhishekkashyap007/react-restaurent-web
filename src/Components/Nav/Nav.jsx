import React, { useRef } from 'react'
import navCSS from './../Nav/Nav.module.css'
import logoImg from '../../../public/logo.png'

function Nav() {

  const menu = useRef();
  const navbar = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.showNav);
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.current.classList.add(navCSS.navbarScroll);
    }
    else {
      navbar.current.classList.remove(navCSS.navbarScroll);
    }
  })

  return (
    <div className={navCSS.nav_wrapper} ref={navbar}>
       
       <div className={navCSS.logo}>
        <a href='#'><img src={logoImg}></img></a>
      </div>
      {/* <div className={navCSS.logo}>
        <a href='#'><span>THECORBETT</span><br />CAVES</a>
      </div> */}

      <ul ref={menu}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Rooms</a></li>
        <li><a href='#'>View Point</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>

      <div className={navCSS.Nav_btns}>
        <button>Book Now</button>
        <i className='ri-menu-4-line' id={navCSS.bars} onClick={menuHandler}></i>
      </div>

    </div>
  )
}

export default Nav
