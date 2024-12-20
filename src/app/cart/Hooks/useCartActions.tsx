import { addItem, removeItem, updateQuantity } from '@/app/store/cartSlice';
import { useDispatch } from 'react-redux';

export const useCartActions = () => {
    const dispatch = useDispatch();

    const addToCart = (item: { id: string; name: string; price: number; quantity: number }) => {
        dispatch(addItem(item));
    };

    const removeFromCart = (id: string) => {
        dispatch(removeItem(id));
    };

    const setQuantity = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return { addToCart, removeFromCart, setQuantity };
};
