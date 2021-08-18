import React from 'react';
import { useCartContext } from '../../contexts/CartContext';

export default function AddToCart() {
    const { increase, decrease, cartItems, clearCart, ...cart } = useCartContext();
    console.log(cart);
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1 className='h3'>Shopping Cart</h1>
                <button className='btn btn-danger btn-sm m-1' onClick={clearCart}>
                    Clear Cart
                </button>
            </div>

            <ul class='list-group card m-1' style={{ minHeight: '250px' }}>
                {cartItems.map((item) => {
                    return (
                        <li class='list-group-item d-flex justify-content-between  align-items-center'>
                            <span className='h6 ' style={{ flex: '1' }}>
                                {item.name}
                            </span>
                            <span className='h6 ' style={{ flex: '1' }}>
                                {item.price}$
                            </span>
                            {item.size && (
                                <span className='h6  ' style={{ flex: '1' }}>
                                    {item.size}
                                </span>
                            )}
                            <div>
                                <button
                                    className='btn btn-success '
                                    style={{ flex: '1' }}
                                    onClick={() => increase(item)}
                                >
                                    +
                                </button>
                                <span
                                    className='h6 py-1 px-3 '
                                    style={{ flex: '1' }}
                                >
                                    {item.quantity}
                                </span>
                                <button
                                    className='btn btn-danger '
                                    style={{ flex: '1' }}
                                    onClick={() => decrease(item)}
                                >
                                    -
                                </button>
                            </div>

                            <span
                                className='h6 d-flex justify-content-end '
                                style={{ flex: '1' }}
                            >
                                {item.price * item.quantity}$
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div
                className='d-flex justify-content-end align-items-end '
                style={{ height: '50px' }}
            >
                Total: {cart.total}
            </div>
        </>
    );
}
