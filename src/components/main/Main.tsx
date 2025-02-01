import React, { useState, useEffect } from 'react';
import './Main.css';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Main = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: "Produto Elegante 1",
            price: 299.99,
            image: "https://placehold.co/400x300?text=produto 1"
        },
        {
            id: 2,
            name: "Produto Elegante 2",
            price: 399.99,
            image: "https://placehold.co/400x300?text=produto 2"
        },
        {
            id: 3,
            name: "Produto Elegante 3",
            price: 499.99,
            image: "https://placehold.co/400x300?text=produto 3"
        }
    ]);

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
                </div>
            </section>

            <section className="featured-products">
                <div className="container">
                    <h3>Destaques da Coleção</h3>
                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <div className="product-info">
                                    <h4>{product.name}</h4>
                                    <p>R$ {product.price.toFixed(2)}</p>
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
