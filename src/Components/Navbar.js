import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='blue'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src="https://static.wixstatic.com/media/f663ae_cf8b3693ac7a4ed6b5198a0d2e94a24b~mv2.png/v1/crop/x_0,y_152,w_500,h_295/fill/w_210,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f663ae_cf8b3693ac7a4ed6b5198a0d2e94a24b~mv2.png" alt="Logo" width="80" height="45" className="d-inline-block align-text-top"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="  px-5 navbar-nav">
        <a className="nav-link active px-4 fw-bold "  aria-current="page" href="/">Home</a>
        <a className="nav-link px-4 active fw-bold" href="/">Features</a>
        <a className="  nav-link   px-4  active fw-bold" href="/">Pricing</a>
        <a className="  nav-link   px-4  active fw-bold" href="/">Pricing</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
