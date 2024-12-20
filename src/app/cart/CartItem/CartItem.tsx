'use client';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface ProductItemProps {
    product: Product;
}

const CartItem: React.FC<ProductItemProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            }),
        );
    };
    return (
        <div>
            <h3>{product.name}</h3>
            <p>price {product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};
export default CartItem;
