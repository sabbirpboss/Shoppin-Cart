import React, { useEffect, useState } from 'react';
import Selected from '../Cart/Selected';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    const handleAddToCart = (singleProduct) => {
        const newCart = [...cart, singleProduct];
        setCart(newCart);
    }

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
                    product = {product} handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="selection-container">
                {
                    cart.map(item => <h2 key = {item.id}>{item.name}</h2>)
                }
            </div>
        </section>
    );
};

export default Shop;
