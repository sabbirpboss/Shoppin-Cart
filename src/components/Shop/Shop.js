import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <section className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                    key = {product.id}
                    product = {product}></Product>)
                }
            </div>
            <div className="selection-container">
                <h2>this is selector</h2>
            </div>
        </section>
    );
};

export default Shop;
