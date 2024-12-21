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

    const shortDescription: string =
        product.description.split('').length > 200
            ? product.description.split('').slice(0, 150).join('') + '...'
            : product.description;

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    const handleSetQuantity = (a: boolean) => {
        if (a) setQuantity(product.id, product.quantity + 1);
        else if (product.quantity > 1) setQuantity(product.id, product.quantity - 1);
    };

    return (
        <div className="text-white border justify-between h-[500px] gap-2 flex flex-col items-center border-red-950 rounded-md p-2">
            <div className="h-[10%]">
                <h3>{product.title}</h3>
            </div>
            <div className="w-4/5 h-[30%]">
                <img
                    src={product.image}
                    alt={product.title || 'Product image'}
                    className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
                />
            </div>
            <div className="h-[30%]">
                <p>{shortDescription}</p>
            </div>
            <div className="flex justify-between w-full">
                <p>{product.price}€</p>
            </div>

            <div className="h-[10%] flex gap-2 justify-around w-full items-center">
                <button className="text-2xl" onClick={() => handleSetQuantity(false)}>
                    -
                </button>
                <p>{product.quantity}</p>
                <button className="text-2xl" onClick={() => handleSetQuantity(true)}>
                    +
                </button>
            </div>
            <div className="h-[10%] flex gap-2 justify-between w-full">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            </div>
        </div>
    );
};
export default CartItem;
