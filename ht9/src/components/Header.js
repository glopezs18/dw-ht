import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import '../styles/header.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="p-3 bg-header text-white">
                    <div className="container">
                        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                <span className="fs-4 text-white">Simple header</span>
                            </a>

                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={`nav-link px-2 text-white ${({ isActive }) => (isActive ? 'active' : '')}`}
                                    >
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/list"
                                        className={`nav-link px-2 text-white ${({ isActive }) => (isActive ? 'active' : '')}`}
                                    >
                                        Listado
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={`nav-link px-2 text-white ${({ isActive }) => (isActive ? 'active' : '')}`}
                                    >
                                        Acerca de
                                    </NavLink>
                                </li>
                            </ul>
                        </header>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header