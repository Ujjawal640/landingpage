import React, { Component, useRef, useState } from "react";
import { Container } from "reactstrap";
import logoImg from "../assets/logo.jpg";
import "./header.css";

class Header extends Component {
  // const menuRef = useRef();
  state = { clicked: false };
  handleClick = ()=>{
    this.setState({clicked : !this.state.clicked})
  }
  render() {
    return (
      <>
        <nav>
          {/* logo  */}
          <div className="logo ">
            <img height="90px" src={logoImg} />
          </div>

          {/* menu list */}
          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>                 
                <li className="active nav__item">
                  <a href="#" className="action-btn nav__item">
                    Courses
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="action-btn nav__item">
                    Request Callback
                  </a>
                </li>
              
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Header;
