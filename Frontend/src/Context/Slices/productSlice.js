import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: true
        
    },
    reducers: {
        setProducts: (state, action) => {
            
            state.products = action.payload
            state.loading = false
        }
        
        
    }
});


export const { setProducts } = productSlice.actions

export default productSlice.reducer;