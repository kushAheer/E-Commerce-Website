import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import productSlice from "./Slices/productSlice";
import cartSlice from "./Slices/cartSlice";
import categorySlice from "./Slices/categorySlice";
import addressSlice from "./Slices/addressSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        users : userSlice,
        products : productSlice,
        carts : cartSlice,
        categories : categorySlice,
        address : addressSlice,
    },
    
});

export default store;