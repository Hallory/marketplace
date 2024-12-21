'use client';
import { useCartActions } from '../Hooks/useCartActions';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

interface ProductItemProps {
    product: Product;
}

const CartItem: React.FC<ProductItemProps> = ({ product }) => {
    const { addToCart, removeFromCart, setQuantity } = useCartActions();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            quantity: 1,
        });
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    const handleSetQuantity = (a: boolean) => {
        setQuantity(product.id, a ? product.quantity + 1 : product.quantity - 1);
    };

    return (
        <div className="text-white">
            <h3>{product.title}</h3>
            <p>price {product.price}</p>
            <p>quantity {product.quantity}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            <button onClick={() => handleSetQuantity(true)}>One more</button>
            <button onClick={() => handleSetQuantity(false)}>One no more</button>
        </div>
    );
};
export default CartItem;
