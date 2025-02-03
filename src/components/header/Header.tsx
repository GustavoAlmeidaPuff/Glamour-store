import * as React from 'react';
import './Header.css'; // Importando o CSS para estilização

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./logo.png" alt="Logo" className="logo-image"/>
            </div>
            <nav className="nav">
                <a href="#inicio">Início</a>
                <a href="#galeria">Galeria</a>
                <a href="#contato">Contato</a>
                <a href="#mapa">Onde?</a>
            </nav>
        </header>
    );
};

export default Header;
