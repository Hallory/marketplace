import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CartState = {
    items: [],
    status: 'idle',
};

export const fetchCartProducts = createAsyncThunk<CartItem[], number>(
    'products/fetchAll',
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
        const cartData = await response.json();

        const productPromises = cartData.products.map(
            async (item: { productId: number; quantity: number }) => {
                const productResponse = await fetch(
                    `https://fakestoreapi.com/products/${item.productId}`,
                );
                const product = await productResponse.json();
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    quantity: item.quantity,
                };
            },
        );

        const products = await Promise.all(productPromises);
        return products;
    },
);

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCartProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
