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
            <section id="inicio" className="hero-section">
                <img
                    src="https://i.pinimg.com/736x/3e/4d/1c/3e4d1c62f6f60fd7fb2937bdaca582c9.jpg"
                    alt="Glamour Store Fashion"
                    className="hero-image"
                />
                <div className="hero-content">
                    <h2>Glamour Store</h2>
                    <p>Elegança e estilo para todos os momentos</p>
                </div>
            </section>

            <section id="galeria" className="featured-products">
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

            <section id="mapa" className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.8876016556584!2d-50.776722!3d-29.577472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM0JzM4LjkiUyA1MMKwNDYnMzYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <section id="contato" className="about-section">
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
