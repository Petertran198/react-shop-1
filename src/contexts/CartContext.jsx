import React, { createContext, useReducer, useContext } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const storage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(CartReducer, initialState);

    const increase = (payload) => {
        dispatch({ type: 'INCREASE', payload });
    };

    const decrease = (payload) => {
        dispatch({ type: 'DECREASE', payload });
    };

    const addProduct = (payload) => {
        dispatch({ type: 'ADD_ITEM', payload });
    };

    const removeProduct = (payload) => {
        dispatch({ type: 'REMOVE_ITEM', payload });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR' });
    };

    const handleCheckout = () => {
        console.log('CHECKOUT', cartState);
        dispatch({ type: 'CHECKOUT' });
    };

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...cartState,
    };

    return (
        <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>
    );
};

export default CartContextProvider;
