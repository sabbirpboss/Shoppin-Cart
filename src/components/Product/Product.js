import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price} = product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h1 className='product-name'>{name}</h1>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='addToCart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;