import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <h1 className='selected-items'>Selected Items</h1>
            <div>
                <p>show random data here</p>
            </div>
            <button className='choose-btn'>Choose 1 For Me</button>
            <br />
            <button className='choose-again-btn'>Choose Again</button>
        </div>
    );
};

export default Cart;