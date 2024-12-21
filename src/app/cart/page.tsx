'use client';

import { useEffect } from 'react';
import { AppDispatch, RootState } from '../store/store';
import CartItem from './CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartProducts } from '../store/cartSlice';

const CartPage = () => {
    const { items, status } = useSelector((state: RootState) => state.cart);
    interface CartItem {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;
        quantity: number;
    }

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCartProducts(1));
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Failed to load products.</p>;
    }

    return (
        <div>
            {items[0] ? (
                items.map((item: CartItem) => (
                    <CartItem
                        key={item.id}
                        product={!item.quantity ? { ...item, quantity: 1 } : item}
                    />
                ))
            ) : (
                <h2>Cart is empty</h2>
            )}
        </div>
    );
};

export default CartPage;
