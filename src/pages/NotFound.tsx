import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <p>Página não encontrada</p>
                <Link to="/" className="back-home">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
};

export default NotFound; 