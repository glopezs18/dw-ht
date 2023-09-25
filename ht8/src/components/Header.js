import React, { Component } from 'react'
import LogoMariano from '../images/logo-mariano-galvez.png'
import '../styles/header.scss';

class Header extends Component {
    render() {
        return (            
            <div className="container-fluid bg-header">
                <header className="d-flex flex-wrap justify-content-center py-3">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={LogoMariano} className="header-logo" alt="logo" />
                        <span className="fs-4 fw-bold">Hoja de trabajo #8</span>
                    </a>
                </header>
            </div>            
        );
    }
}

export default Header