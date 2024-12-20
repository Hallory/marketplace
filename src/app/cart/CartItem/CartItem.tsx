'use client';
import { useCartActions } from '../Hooks/useCartActions';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface ProductItemProps {
    product: Product;
}

const CartItem: React.FC<ProductItemProps> = ({ product }) => {
    const { addToCart, removeFromCart, setQuantity } = useCartActions();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        });
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    const handleSetQuantity = () => {
        setQuantity(product.id, 1);
    };

    return (
        <div className="text-white">
            <h3>{product.name}</h3>
            <p>price {product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            <button onClick={handleSetQuantity}>One more</button>
        </div>
    );
};
export default CartItem;
