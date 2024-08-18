import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import productSlice from "./Slices/productSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        users : userSlice,
        products : productSlice,
    },
    
});

export default store;