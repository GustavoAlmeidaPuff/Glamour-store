import React from 'react';
import './Header.css'; // Importando o CSS para estilização

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <nav className="nav">
                <a href="#inicio">Início</a>
                <a href="#galeria">Galeria</a>
                <a href="#contato">Contato</a>
                <a href="#onde">Onde?</a>
            </nav>
        </header>
    );
};

export default Header;
