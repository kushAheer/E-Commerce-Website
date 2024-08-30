import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import productSlice from "./Slices/productSlice";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        users : userSlice,
        products : productSlice,
        carts : cartSlice,
    },
    
});

export default store;