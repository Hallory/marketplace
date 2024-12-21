import { addItem, removeItem, updateQuantity } from '@/app/store/cartSlice';
import { useDispatch } from 'react-redux';

export const useCartActions = () => {
    const dispatch = useDispatch();

    const addToCart = (item: {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;
        quantity: number;
    }) => {
        dispatch(addItem(item));
    };

    const removeFromCart = (id: number) => {
        dispatch(removeItem(id));
    };

    const setQuantity = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return { addToCart, removeFromCart, setQuantity };
};
