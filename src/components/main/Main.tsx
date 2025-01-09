import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main>
            <section className="hero-section">
                <img
                    src="https://placehold.co/1080x1920"
                    alt="Glamour Store Fashion"
                    className="hero-image"
                />
                <div className="hero-content">
                    <h2>Elegância em Cada Detalhe</h2>
                    <p>Descubra a nova coleção que vai transformar seu estilo</p>
                    <button className="explore-button">
                        Explorar Coleção
                    </button>
                </div>
            </section>

            <section className="featured-products">
                <div className="container">
                    <h3>Destaques da Coleção</h3>
                    <div className="products-grid">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="product-card">
                                <img
                                    src={`https://placehold.co/400x300?text=produto ${item}`}
                                    alt={`Produto ${item}`}
                                    className="product-image"
                                />
                                <div className="product-info">
                                    <h4>Produto Elegante {item}</h4>
                                    <p>R$ {(Math.random() * 500 + 100).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h3>Sobre a Glamour Store</h3>
                    <p>
                        A Glamour Store é mais do que uma loja de roupas - é um destino para quem busca estilo e sofisticação.
                        Nossa missão é oferecer peças únicas que realçam a beleza individual de cada cliente, 
                        combinando tendências modernas com elegância atemporal.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Main;
