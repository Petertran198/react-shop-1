import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from '../../components/cart/CartItem';
import { useCartContext } from '../../contexts/CartContext';
import './addToCart.scss';
export default function AddToCart() {
    const { increase, decrease, cartItems, clearCart, ...cart } = useCartContext();
    const [error, setError] = useState();
    const history = useHistory();
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1 className='h3'>Shopping Cart</h1>
                <button className='btn btn-danger btn-sm m-1' onClick={clearCart}>
                    Clear Cart
                </button>
            </div>

            <ul class='list-group card m-1' style={{ minHeight: '250px' }}>
                <li class='list-group-item d-flex justify-content-between '>
                    <span className='h6 text-primary ' style={{ flex: '1' }}>
                        Name
                    </span>
                    <span className='h6 text-primary ' style={{ flex: '1' }}>
                        Price
                    </span>

                    <span
                        className='h6 text-primary'
                        style={{ flex: '1', marginLeft: '4%' }}
                    >
                        Size
                    </span>

                    <div>
                        <span
                            className='h6 text-primary py-1 px-3 '
                            style={{ flex: '1' }}
                        >
                            Quantity
                        </span>
                    </div>

                    <span
                        className='h6 text-primary d-flex justify-content-end '
                        style={{ flex: '1' }}
                    >
                        Cost
                    </span>
                </li>
                {cartItems.map((item) => {
                    return <CartItem item={item} setError={setError} />;
                })}
            </ul>
            {cart.total > 0 && (
                <div
                    className='d-flex justify-content-end align-items-end '
                    style={{ height: '50px' }}
                >
                    <button
                        className='btn btn-primary'
                        onClick={() => history.push('./payment')}
                    >
                        Purchase {cart.total}
                    </button>
                </div>
            )}
        </>
    );
}
