'use client';

import { RootState } from '../store/store';
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    interface CartItem {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;
        quantity: number;
    }
    return (
        <div>
            {cartItems[0] ? (
                cartItems.map((item: CartItem) => (
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
