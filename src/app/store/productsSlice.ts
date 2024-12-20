import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ProductState = {
  items: [],
  status: "idle",
};

export const fetchAllProducts = createAsyncThunk<Product[]>("products/fetchAll", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllProducts.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state)=>{
            state.status = 'failed'
        })
    }
})

export default productsSlice.reducer;