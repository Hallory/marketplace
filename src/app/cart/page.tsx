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
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

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
        <>
            <h1>Cart</h1>
            <div className="flex">
                <div className=" grid grid-cols-5 gap-2">
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
                <div className="w-full p-4">
                    <h2>Price:</h2>
                    <br />
                    {items.map((item: CartItem) => (
                        <div key={item.id}>
                            {item.title}: <br /> {item.price} * {item.quantity} ={' '}
                            {item.price * item.quantity}
                        </div>
                    ))}
                    <h3>{totalPrice}</h3>
                </div>
            </div>
        </>
    );
};

export default CartPage;
