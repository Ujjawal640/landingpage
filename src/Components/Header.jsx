import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import logoImg from "../assets/logo.jpg";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  {
    display: "Courses",
    url: "#courses",
  },
  {
    display: "Placement Call",
    url: "#",
  },
  {
    display: "FAQs",
    url: "#",
  },
];

const Header = () => {
  // const toggleBtn = document.querySelector(".toggle-btn")
  // const toggleBtnIcon = document.querySelector(".toggle-btn i")
  // const dropDownMenu = document.querySelector(".dropdown_menu")

  // function toggleBtnClick() {
  //   dropDownMenu.classList.toggle('open')
  //   const isOpen = dropDownMenu.classList.contains('open')

  //   toggleBtnIcon.classList=isOpen
  //   ? 'fa-solid fa-xmark'
  //   : 'fa-solid fa-bars'
  // }

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
        <div className="navigation ">
          {/* logo  */}
          <div className="logo ">
            <img height="90px" src={logoImg}/>           
          </div>
          {/* menu list */}
            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"} ref={menuRef} >
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>                    
                  </li>
                ))}
                <a href="#callback"  className="action-btn">Request Callback</a>
              </ul>              
            </div>  

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
          
          {/* <div className="toggle-btn">
            <i className="fa-solid fa-bars" onClick={toggleBtnClick}></i>
          </div>         */}
        </div>
        
        {/* <div className="dropdown_menu ">
          {navLinks.map((item, index) => (
              <li key={index} className="nav__item">
                <a href={item.url}>{item.display}</a>                    
              </li>
              
            ))}
            <a href="#"  className="action-btn">Request Callback</a>
        </div> */}
    </header>
  );
};

export default Header;
