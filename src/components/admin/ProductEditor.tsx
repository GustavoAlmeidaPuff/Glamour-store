import React, { useState } from 'react';
import './ProductEditor.css';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const ProductEditor: React.FC = () => {
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

    const handleProductChange = (id: number, field: keyof Product, value: string | number) => {
        setProducts(products.map(product => {
            if (product.id === id) {
                return { ...product, [field]: value };
            }
            return product;
        }));
    };

    const handleSubmit = () => {
        // Aqui você pode implementar a lógica para salvar as alterações
        console.log('Produtos atualizados:', products);
        alert('Produtos atualizados com sucesso!');
    };

    return (
        <div className="product-editor">
            <h2>Editar Produtos</h2>
            {products.map((product) => (
                <div key={product.id} className="product-form">
                    <h3>Produto {product.id}</h3>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={product.name}
                            onChange={(e) => handleProductChange(product.id, 'name', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Preço:</label>
                        <input
                            type="number"
                            value={product.price}
                            onChange={(e) => handleProductChange(product.id, 'price', parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="form-group">
                        <label>URL da Imagem:</label>
                        <input
                            type="text"
                            value={product.image}
                            onChange={(e) => handleProductChange(product.id, 'image', e.target.value)}
                        />
                    </div>
                    <div className="preview">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
            ))}
            <button className="save-button" onClick={handleSubmit}>
                Salvar Alterações
            </button>
        </div>
    );
};

export default ProductEditor; 