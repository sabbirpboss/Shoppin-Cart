import React from 'react';
import './Selected.css'

const Cart = () => {
    return (
        <div>
            {/* <h1 className='selected-items'>Selected Items</h1> */}
            {/* <div>
                <p>show item here</p>
            </div> */}
            <button className='choose-btn'>Choose 1 For Me</button>
            <br />
            <button className='choose-again-btn'>Choose Again</button>
        </div>
    );
};

export default Cart;