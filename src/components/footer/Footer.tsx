import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Glamour Store</h4>
                    <p>Elegância em cada peça</p>
                </div>
                <div className="footer-section">
                    <h5>Contato</h5>
                    <p>contato@glamourstore.com</p>
                    <p>(11) 1234-5678</p>
                </div>
                <div className="footer-section">
                    <h5>Siga-nos</h5>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram">
                            <img src="/instagram.png" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Glamour Store. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
