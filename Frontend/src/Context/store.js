import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        users : userSlice
    },
    
});

export default store;