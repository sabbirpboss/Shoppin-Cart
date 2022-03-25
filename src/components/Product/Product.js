import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img, name, price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h1 className='product-name'>{name}</h1>
                <p>{price}</p>
            </div>
            <button className='addToCart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;