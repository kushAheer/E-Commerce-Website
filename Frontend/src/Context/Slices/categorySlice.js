import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers : {
        addCategory : (state , action) => {
            state.categories = action.payload
            
        }
    }
});


export const {addCategory} = categorySlice.actions;

export default categorySlice.reducer;