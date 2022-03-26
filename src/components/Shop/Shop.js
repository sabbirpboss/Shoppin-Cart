import React, { useEffect, useState } from 'react';
import Selected from '../Cart/Selected';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    const handleAddToCart = (singleProduct) => {
        const addedProduct = cart.find((item) => item.id === singleProduct.id);
        if(addedProduct){
            alert("Already Added");
        }
        else{
            const newCart = [...cart, singleProduct];
            setCart(newCart);
        }
    }

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const randomOne = () => {
        const random = cart[Math.floor(Math.random() * cart.length)];
        const newCarts = [random];
        setCart(newCarts);
    }
    const resetButton = () => {
        const reset = [];
        setCart(reset);
    }
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
                <h1 className='selected-items'>Selected Items:</h1>
                {
                    cart.map(item => <h2 className='custom-color' key = {item.id}>{item.name}</h2>)
                }
                <button onClick={randomOne}>Random Choose</button>
                <button onClick={resetButton}>Clear all</button>
                {/* <Selected></Selected> */}
            </div>
        </section>
    );
};

export default Shop;
