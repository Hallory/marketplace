import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [
        {
            id: 1,
            title: 'Product 1',
            price: 10.99,
            description: 'This is a product',
            image: 'https://via.placeholder.com/150',
            quantity: 1,
        },
        {
            id: 2,
            title: 'Product 2',
            price: 19.99,
            description: 'This is another product',
            image: 'https://via.placeholder.com/150',
            quantity: 2,
        },
        {
            id: 3,
            title: 'Product 3',
            price: 29.99,
            description: 'This is yet another product',
            image: 'https://via.placeholder.com/150',
            quantity: 3,
        },
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
                console.log(existingItem.quantity, 'quantity', existingItem.id, 'id');
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
